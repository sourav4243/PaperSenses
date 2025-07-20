import Upload from "@/components/Upload";
import {Dropzone} from "@/components/MultiFileDropzone";

export default function Home() {
  return (
    <div>
      <Upload/>
      <Dropzone />
    </div>
  );
}
