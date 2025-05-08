import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { MessageSquare, ThumbsUp, Clock, Tag, FileText, BookOpen } from 'lucide-react';
import { discussionPosts, getPostsByFaculty, getFacultyName, Post } from '@/lib/discussionData';
import { useToast } from '@/hooks/use-toast';
import { facultyData } from '@/lib/data';

export default function DiscussionPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredPosts = activeTab === 'all' 
    ? discussionPosts 
    : getPostsByFaculty(activeTab);

  const displayPosts = searchQuery 
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredPosts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleCreatePost = () => {
    navigate('/discussions/create');
    toast({
      title: "Feature Coming Soon",
      description: "The ability to create new posts is coming soon!",
    });
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Discussion Forum</h1>
            <Button onClick={handleCreatePost}>Create Post</Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Engage in academic discussions, ask questions, and share knowledge with fellow students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Input 
              placeholder="Search discussions..." 
              className="max-w-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4 flex-wrap">
            <TabsTrigger value="all">All Posts</TabsTrigger>
            {facultyData.map((faculty) => (
              <TabsTrigger key={faculty.id} value={faculty.id}>
                {faculty.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            {displayPosts.length > 0 ? (
              displayPosts.map((post) => (
                <DiscussionCard key={post.id} post={post} />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground">
                  No discussions found. Be the first to start a conversation!
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function DiscussionCard({ post }: { post: Post }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardHeader>
        <Link to={`/discussions/${post.id}`}>
          <CardTitle className="text-xl hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </Link>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 text-secondary-foreground"
            >
              <Tag className="mr-1 h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-muted-foreground">
          {post.content}
        </p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex flex-wrap items-center justify-between w-full gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>{post.authorName}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {formatDate(post.createdAt)}
            </span>
            <span className="flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              {getFacultyName(post.facultyId)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ThumbsUp className="h-3.5 w-3.5" />
              {post.upvotes}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5" />
              {post.commentCount}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
