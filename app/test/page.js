"use client"
import { CldUploadWidget } from "next-cloudinary";

export default function Page() {
    return(
<CldUploadWidget uploadPreset="unsigned_preset"
onSuccess={(result)=>{console.log(result.info.url)}}
>
  {({ open }) => {
    return (
      <button onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>)
}