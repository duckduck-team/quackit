import React from 'react';

interface TagProps {
    tag: string;
}

const Tag: React.FC<TagProps> = ({ tag, ...props }) => {
    return (
        <button className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-600 mr-2 mb-2">{tag}</button>
    );
};

export default Tag;