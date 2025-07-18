'use client';;
import * as React from 'react';

// Context
const UploaderContext =
  React.createContext(null);

/**
 * Hook to access the uploader context.
 *
 * @returns The uploader context
 * @throws Error if used outside of UploaderProvider
 *
 * @example
 * ```tsx
 * const { fileStates, addFiles, uploadFiles } = useUploader();
 * ```
 */
export function useUploader() {
  const context = React.useContext(UploaderContext);
  if (!context) {
    throw new Error('useUploader must be used within a UploaderProvider');
  }
  return context;
}

/**
 * Provider component for file upload functionality.
 *
 * @component
 * @example
 * ```tsx
 * <UploaderProvider
 *   uploadFn={async ({ file, signal, onProgressChange }) => {
 *     // Upload implementation
 *     return { url: 'https://example.com/uploads/image.jpg' };
 *   }}
 *   autoUpload={true}
 * >
 *   <ImageUploader maxFiles={5} maxSize={1024 * 1024 * 2} />
 * </UploaderProvider>
 * ```
 */
export function UploaderProvider(
  {
    children,
    onChange,
    onFileAdded,
    onFileRemoved,
    onUploadCompleted,
    uploadFn,
    value: externalValue,
    autoUpload = false
  }
) {
  const [fileStates, setFileStates] = React.useState(externalValue ?? []);
  const [pendingAutoUploadKeys, setPendingAutoUploadKeys] = React.useState(null);

  // Sync with external value if provided
  React.useEffect(() => {
    if (externalValue) {
      setFileStates(externalValue);
    }
  }, [externalValue]);

  const updateFileState = React.useCallback((key, changes) => {
    setFileStates((prevStates) => {
      return prevStates.map((fileState) => {
        if (fileState.key === key) {
          return { ...fileState, ...changes };
        }
        return fileState;
      });
    });
  }, []);

  const uploadFiles = React.useCallback(async (keysToUpload, options) => {
    const filesToUpload = fileStates.filter((fileState) =>
      fileState.status === 'PENDING' &&
      (!keysToUpload || keysToUpload.includes(fileState.key)));

    if (filesToUpload.length === 0) return;

    await Promise.all(filesToUpload.map(async (fileState) => {
      try {
        const abortController = new AbortController();
        updateFileState(fileState.key, {
          abortController,
          status: 'UPLOADING',
          progress: 0,
        });

        const uploadResult = await uploadFn({
          file: fileState.file,
          signal: abortController.signal,
          onProgressChange: (progress) => {
            updateFileState(fileState.key, { progress });
          },
          options,
        });

        // Wait a bit to show the bar at 100%
        await new Promise((resolve) => setTimeout(resolve, 500));

        const completedFile = {
          ...fileState,
          status: "COMPLETE",
          progress: 100,
          url: uploadResult?.url,
        };

        updateFileState(fileState.key, {
          status: 'COMPLETE',
          progress: 100,
          url: uploadResult?.url,
        });

        // Call onUploadCompleted when a file upload is completed
        if (onUploadCompleted) {
          void onUploadCompleted(completedFile);
        }
      } catch (err) {
        if (
          err instanceof Error &&
          // if using with EdgeStore, the error name is UploadAbortedError
          (err.name === 'AbortError' || err.name === 'UploadAbortedError')
        ) {
          updateFileState(fileState.key, {
            status: 'PENDING',
            progress: 0,
            error: 'Upload canceled',
          });
        } else {
          if (process.env.NODE_ENV === 'development') {
            console.error(err);
          }
          const errorMessage =
            err instanceof Error ? err.message : 'Upload failed';
          updateFileState(fileState.key, {
            status: 'ERROR',
            error: errorMessage,
          });
        }
      }
    }));
  }, [fileStates, updateFileState, uploadFn, onUploadCompleted]);

  const addFiles = React.useCallback((files) => {
    const newFileStates = files.map((file) => ({
      file,
      key: `${file.name}-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}`,
      progress: 0,
      status: 'PENDING',
      autoUpload,
    }));
    setFileStates((prev) => [...prev, ...newFileStates]);

    // Call onFileAdded for each new file
    if (onFileAdded) {
      newFileStates.forEach((fileState) => {
        void onFileAdded(fileState);
      });
    }

    if (autoUpload) {
      setPendingAutoUploadKeys(newFileStates.map((fs) => fs.key));
    }
  }, [autoUpload, onFileAdded]);

  const removeFile = React.useCallback((key) => {
    setFileStates((prev) =>
      prev.filter((fileState) => fileState.key !== key));

    // Call onFileRemoved when a file is removed
    if (onFileRemoved) {
      void onFileRemoved(key);
    }
  }, [onFileRemoved]);

  const cancelUpload = React.useCallback((key) => {
    const fileState = fileStates.find((f) => f.key === key);
    if (fileState?.abortController && fileState.progress < 100) {
      fileState.abortController.abort();
      if (fileState?.autoUpload) {
        // Remove file if it was an auto-upload
        removeFile(key);
      } else {
        // If it was not an auto-upload, reset the file state
        updateFileState(key, { status: 'PENDING', progress: 0 });
      }
    }
  }, [fileStates, updateFileState, removeFile]);

  const resetFiles = React.useCallback(() => {
    setFileStates([]);
  }, []);

  React.useEffect(() => {
    const completedFileStates = fileStates.filter(fs => fs.status === 'COMPLETE' && !!fs.url);
    void onChange?.({
      allFiles: fileStates,
      completedFiles: completedFileStates,
    });
  }, [fileStates, onChange]);

  // Handle auto-uploading files added to the queue
  React.useEffect(() => {
    if (pendingAutoUploadKeys && pendingAutoUploadKeys.length > 0) {
      void uploadFiles(pendingAutoUploadKeys);
      setPendingAutoUploadKeys(null);
    }
  }, [pendingAutoUploadKeys, uploadFiles]);

  const isUploading = React.useMemo(() => fileStates.some((fs) => fs.status === 'UPLOADING'), [fileStates]);

  const value = React.useMemo(() => ({
    fileStates,
    addFiles,
    updateFileState,
    removeFile,
    cancelUpload,
    uploadFiles,
    resetFiles,
    isUploading,
    autoUpload,
  }), [
    fileStates,
    addFiles,
    updateFileState,
    removeFile,
    cancelUpload,
    uploadFiles,
    resetFiles,
    isUploading,
    autoUpload,
  ]);

  return (
    <UploaderContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </UploaderContext.Provider>
  );
}

/**
 * Formats a file size in bytes to a human-readable string.
 *
 * @param bytes - The file size in bytes
 * @returns A formatted string (e.g., "1.5 MB")
 *
 * @example
 * ```ts
 * formatFileSize(1024); // "1 KB"
 * formatFileSize(1024 * 1024 * 2.5); // "2.5 MB"
 * ```
 */
export function formatFileSize(bytes) {
  if (!bytes) return '0 B';
  const k = 1024;
  const dm = 2;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
