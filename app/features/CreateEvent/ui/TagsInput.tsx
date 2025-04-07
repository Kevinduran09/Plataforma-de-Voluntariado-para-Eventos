import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import type { Tag } from "react-tag-input";

const KeyCodes = {
  enter: 13,
};

const CustomRemoveComponent = ({ onRemove }: { onRemove: () => void }) => (
  <button
    onClick={onRemove}
    className="ml-2 text-gray-500 hover:text-red-600 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  </button>
);

const delimiters = [KeyCodes.enter];

interface TagsInputProps {
  onTagsChange: (tags: Tag[]) => void;
}

const TagsInput: React.FC<TagsInputProps> = ({ onTagsChange }) => {
  const [tags, setTags] = useState<Tag[]>([]);

  const handleAddition = (tag: Tag) => {
    const newTags = [...tags, tag];
    setTags(newTags);
    onTagsChange(newTags);
  };

  const handleDelete = (i: number) => {
    const newTags = tags.filter((_, index) => index !== i);
    setTags(newTags);
    onTagsChange(newTags);
  };

  return (
    <div className="mt-1 w-full">
      <ReactTags
        tags={tags.map((tag, index) => ({
          ...tag,
          className: index % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800',
        }))}
        handleDelete={handleDelete}
        autoFocus={false}
        handleAddition={handleAddition}
        removeComponent={CustomRemoveComponent} // ← Icono personalizado
        classNames={{
          tags: 'flex flex-wrap items-center gap-4', // ← Espacio horizontal,
          tagInput: 'w-full min-w-[800px]',
          tag: 'flex items-center justify-between rounded-lg px-4 py-2 my-2 bg-blue-100 text-blue-800', // ← Espacio vertical
          tagInputField: 'w-full p-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300',
          remove:'absolute right-2 text-blue-600 hover:text-blue-800 cursor-pointer',
        }}
        inputFieldPosition="inline"
        placeholder="Escribe y presiona Enter..."
      />
    </div>
  );
  // return (
  //   <div className="mt-1 w-full" >
  //     <ReactTags
  //       tags={tags.map((tag, index) => ({
  //         ...tag,
  //         className: index % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800',
  //       }))}
  //       handleDelete={handleDelete}
  //       handleAddition={handleAddition}
  //       delimiters={delimiters}
  //       inputFieldPosition="inline"
  //       autoFocus={false}
  //       placeholder= "Escribe la tarea a realizar y presiona Enter para agregar."
  //       autocomplete
  //       classNames={{
  //         tags: 'flex flex-wrap items-center gap-5 w-full', 
  //         tagInput: 'w-full min-w-[800px]',
  //         tagInputField: 'w-full p-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-w-[300px]',
  //         tag: 'flex items-center rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap',
  //         remove: 'ml-1 text-blue-600 hover:text-blue-800 cursor-pointer',
  //         suggestions: 'bg-white border border-gray-300 rounded-lg shadow-lg mt-1',
  //         activeSuggestion: 'bg-blue-100',
  //       }}
  //       inputProps={{
  //         className: 'min-w-[800px]',
  //       }}
  //     />
  //   </div>
  // );
};

export default TagsInput;

