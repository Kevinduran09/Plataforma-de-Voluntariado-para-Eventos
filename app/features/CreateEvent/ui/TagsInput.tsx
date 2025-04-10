import React, { useState, type KeyboardEvent, type ChangeEvent } from 'react';

export interface Tag {
  id: string;
  text: string;
}

interface TagsInputProps {
  onTagsChange: (tags: Tag[]) => void;
}

const KeyCodes = {
  enter: 13,
  comma: 188,
};

const TagsInput: React.FC<TagsInputProps> = ({ onTagsChange }) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Función para agregar un tag
  const addTag = () => {
    const trimmed = inputValue.trim();
    if (trimmed === '') return;

    // Crear nuevo tag (se podría usar un id único, aquí usamos el texto)
    const newTag: Tag = { id: trimmed, text: trimmed };
    const newTags = [...tags, newTag];
    setTags(newTags);
    onTagsChange(newTags);
    setInputValue('');
  };

  // Maneja la pulsación de teclas (para Enter o Coma)
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === KeyCodes.enter || e.keyCode === KeyCodes.comma) {
      e.preventDefault();
      addTag();
    }
  };

  // Maneja cambios en el input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Maneja la eliminación de un tag
  const handleDelete = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    onTagsChange(newTags);
  };

  return (
    <div className="mt-1">

      {/* Listado de etiquetas */}
      <div className="mt-2 flex flex-col gap-4 my-4">
        {tags.map((tag, index) => (
          <div
            key={tag.id + index}
            className="flex items-center justify-between bg-gray-200/40 text-gray-600 px-3 border-2 border-gray-400/50 py-2 rounded-md"
          >
            <span>{tag.text}</span>
            <button
              onClick={() => handleDelete(index)}
              className="ml-2 text-red-700 hover:text-red-500 focus:outline-none"
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
          </div>
        ))}
      </div>
      {/* Input y botón en la misma línea */}
      <div className="flex w-full gap-2">
        <input
          type="text"
          placeholder="Escribe una etiqueta..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-1 min-w-0 p-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addTag}
          className="px-4 shrink-0 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Agregar
        </button>
      </div>



    </div>
  );
};

export default TagsInput;
