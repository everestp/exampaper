import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Heart } from 'lucide-react';

// Mock discussion data
const mockDiscussions = [
  {
    id: '1',
    title: 'Database Normalization Techniques',
    content: "What are the main differences between 3NF and BCNF? I'm confused about when to use each one.",
    author: {
      id: '101',
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    createdAt: '3 hours ago',
    likes: 8,
    replies: [
      {
        id: '1-1',
        content: '3NF eliminates transitive dependencies, while BCNF is stricter and ensures every determinant is a candidate key.',
        author: {
          id: '102',
          name: 'Maria Garcia',
          avatar: 'https://i.pravatar.cc/150?img=5',
        },
        createdAt: '2 hours ago',
        likes: 5,
      },
      {
        id: '1-2',
        content: 'Use 3NF for most general purposes, but when you need to eliminate all anomalies, go for BCNF. However, BCNF might break some dependencies.',
        author: {
          id: '103',
          name: 'David Kim',
          avatar: 'https://i.pravatar.cc/150?img=8',
        },
        createdAt: '1 hour ago',
        likes: 3,
      },
    ],
  },
  {
    id: '2',
    title: 'Recommendations for Computer Architecture Books',
    content: "I'm looking for a good resource to learn more about computer architecture, specifically cache design and memory hierarchy. Any suggestions?",
    author: {
      id: '104',
      name: 'Sarah Williams',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
    createdAt: '1 day ago',
    likes: 12,
    replies: [
      {
        id: '2-1',
        content: '"Computer Architecture: A Quantitative Approach" by Hennessy and Patterson is considered the bible for computer architecture.',
        author: {
          id: '105',
          name: 'James Miller',
          avatar: 'https://i.pravatar.cc/150?img=12',
        },
        createdAt: '20 hours ago',
        likes: 7,
      },
    ],
  },
];

const DiscussionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Discussions</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <MessageSquare className="h-5 w-5 mr-1" />
            New Discussion
          </Button>
        </div>

        {/* Create discussion form */}
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Start a new discussion</h2>
          </CardHeader>
          <CardContent>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Discussion title"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Textarea
                placeholder="What would you like to discuss?"
                className="w-full h-24 mb-4"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Post Discussion
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {mockDiscussions.map((discussion) => (
            <Card key={discussion.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                      <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{discussion.author.name}</h3>
                      <p className="text-xs text-gray-500">{discussion.createdAt}</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {discussion.likes}
                  </Button>
                </div>
                <h2 className="text-xl font-bold mt-3">{discussion.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{discussion.content}</p>
              </CardContent>
              <CardFooter className="flex-col items-start pt-4 border-t">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  {discussion.replies.length} {discussion.replies.length === 1 ? 'Reply' : 'Replies'}
                </h4>
                
                {discussion.replies.map((reply) => (
                  <div key={reply.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-3 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                          <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h5 className="font-medium text-sm">{reply.author.name}</h5>
                          <p className="text-xs text-gray-500">{reply.createdAt}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        {reply.likes}
                      </Button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{reply.content}</p>
                  </div>
                ))}
                
                <div className="mt-4 w-full">
                  <Textarea
                    placeholder="Write a reply..."
                    className="w-full h-20 mb-2"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Reply
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionsPage;
