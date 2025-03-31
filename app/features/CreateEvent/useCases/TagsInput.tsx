import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import type { Tag } from "react-tag-input";

const KeyCodes = {
  enter: 13,
};



const delimiters = [KeyCodes.enter];

const TagsInput: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  const handleAddition = (tag: Tag) => {
    setTags([...tags, tag]);
  };

  const handleDelete = (i: number) => {
    setTags(tags.filter((_, index) => index !== i));
  };

  return (
    <div className="mt-1 w-full" >
      <ReactTags
        tags={tags.map((tag, index) => ({
          ...tag,
          className: index % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800',
        }))}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        delimiters={delimiters}
        inputFieldPosition="inline"
        placeholder= "Escribe la tarea a realizar y presiona Enter para agregar."
        autocomplete
        classNames={{
          tags: 'flex flex-wrap items-center gap-5 w-full', 
          tagInput: 'w-full min-w-[800px]',
          tagInputField: 'w-full p-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-w-[300px]',
          tag: 'flex items-center rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap',
          remove: 'ml-1 text-blue-600 hover:text-blue-800 cursor-pointer',
          suggestions: 'bg-white border border-gray-300 rounded-lg shadow-lg mt-1',
          activeSuggestion: 'bg-blue-100',
        }}
        inputProps={{
          className: 'min-w-[800px]',
        }}
      />
    </div>
  );
};

export default TagsInput;