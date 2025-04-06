import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface DropZoneProps {
  onImageUpload: (file: File) => void; 
}

export default function DropZone({ onImageUpload }: DropZoneProps) {
  const [imagen, setImagen] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const imageUrl = URL.createObjectURL(file);
    setImagen(imageUrl);
    onImageUpload(file); 
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer bg-gray-50"
    >
      <input {...getInputProps()} />
      {imagen ? (
        <img
          src={imagen}
          alt="Vista previa"
          className="w-full max-h-48 object-cover rounded-md"
        />
      ) : (
        <>
          <p className="text-gray-500 text-sm">
            {isDragActive
              ? "Suelta la imagen aquí..."
              : "Arrastra y suelta una imagen aquí, o haz clic para seleccionar un archivo"}
          </p>
          <button
            type="button"
            className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Seleccionar Imagen
          </button>
        </>
      )}
    </div>
  );
}