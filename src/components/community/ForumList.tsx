import React from 'react';
import { MessageSquare, ThumbsUp, Eye } from 'lucide-react';

const ForumList = () => {
  const discussions = [
    {
      id: 1,
      title: 'Best local ingredients for cocktails?',
      author: 'John Smith',
      date: '2h ago',
      replies: 12,
      likes: 24,
      views: 156
    },
    {
      id: 2,
      title: 'Tips for speed bartending',
      author: 'Sarah Johnson',
      date: '5h ago',
      replies: 8,
      likes: 16,
      views: 98
    }
  ];

  return (
    <div className="space-y-4">
      {discussions.map(discussion => (
        <div key={discussion.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {discussion.title}
              </h3>
              <p className="text-sm text-gray-500">
                Posted by {discussion.author} · {discussion.date}
              </p>
            </div>
            <button className="bg-amber-100 text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-200 transition">
              Reply
            </button>
          </div>
          <div className="flex items-center space-x-6 mt-4 text-gray-500">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>{discussion.replies} replies</span>
            </div>
            <div className="flex items-center space-x-2">
              <ThumbsUp className="h-4 w-4" />
              <span>{discussion.likes} likes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>{discussion.views} views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumList;