import React from 'react';
import { fetchPostsByTag } from '../../lib/posts';

interface TagProps {
    tag: string;
    callback: Function
}

const Tag: React.FC<TagProps> = ({ tag, callback, ...props }) => {
    const fetchByTag = async () => {
        const postsData = await fetchPostsByTag(tag)
        const posts = postsData['posts']
        callback(posts)
    }

    return (
        <button onClick={() => fetchByTag()} className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-600 mr-2 mb-2">{tag}</button>
    );
};

export default Tag;