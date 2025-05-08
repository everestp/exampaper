import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ThumbsUp, MessageSquare, Clock, Tag } from 'lucide-react';
import { getPostById, getCommentsByPostId, getFacultyName, Comment } from '@/lib/discussionData';
import { useToast } from '@/hooks/use-toast';

export default function DiscussionDetailPage() {
  const { postId } = useParams<{ postId: string }>();
  const [commentText, setCommentText] = useState('');
  const { toast } = useToast();
  
  const post = postId ? getPostById(postId) : undefined;
  const comments = postId ? getCommentsByPostId(postId) : [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleUpvote = () => {
    toast({
      title: "Feature Coming Soon",
      description: "The ability to upvote posts will be available after logging in.",
    });
  };

  const handleCommentSubmit = () => {
    if (!commentText.trim()) {
      toast({
        title: "Empty Comment",
        description: "Please enter a comment before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Comment Added",
      description: "Your comment has been added successfully.",
    });
    
    setCommentText('');
  };

  if (!post) {
    return (
      <div className="container py-8 md:py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Discussion not found</h1>
          <p className="mb-4">The discussion you're looking for doesn't exist or has been removed.</p>
          <Link to="/discussions">
            <Button>Return to Discussions</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-6">
        <Link to="/discussions" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Discussions
        </Link>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{post.authorName}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {formatDate(post.createdAt)}
              </span>
              <span>•</span>
              <span>{getFacultyName(post.facultyId)}</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mt-1">
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
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="prose prose-sm sm:prose-base max-w-none">
            <p className="whitespace-pre-line">{post.content}</p>
          </div>
        </CardContent>
        
        <CardFooter className="border-t pt-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={handleUpvote}
            >
              <ThumbsUp className="h-4 w-4" />
              Upvote ({post.upvotes})
            </Button>
          </div>
        </CardFooter>
      </Card>
      
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Comments ({comments.length})</h2>
        
        <Card className="mb-6">
          <CardContent className="pt-6">
            <Textarea
              placeholder="Add your comment..."
              className="mb-4"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <div className="flex justify-end">
              <Button onClick={handleCommentSubmit}>
                Post Comment
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map(comment => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  const [upvoted, setUpvoted] = useState(false);
  const { toast } = useToast();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleUpvote = () => {
    setUpvoted(!upvoted);
    toast({
      title: upvoted ? "Upvote Removed" : "Comment Upvoted",
      description: upvoted 
        ? "You have removed your upvote from this comment." 
        : "You have upvoted this comment.",
    });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarFallback>{comment.authorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">{comment.authorName}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(comment.createdAt)}
                </p>
              </div>
            </div>
            <p className="text-sm">{comment.content}</p>
            <div className="mt-2 flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-2 text-muted-foreground hover:text-foreground flex items-center gap-1"
                onClick={handleUpvote}
              >
                <ThumbsUp className={`h-3.5 w-3.5 ${upvoted ? 'fill-current' : ''}`} />
                <span>{upvoted ? comment.upvotes + 1 : comment.upvotes}</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
