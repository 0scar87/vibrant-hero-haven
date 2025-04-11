
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { setHumeApiKey, refreshApiKey } from '@/integrations/hume/humeClient';
import { toast } from '@/components/ui/use-toast';

interface ApiKeyInputProps {
  onApiKeySet: () => void;
}

export const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onApiKeySet }) => {
  const [apiKey, setApiKey] = useState('');
  
  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive"
      });
      return;
    }
    
    setHumeApiKey(apiKey.trim());
    refreshApiKey();
    toast({
      title: "Success",
      description: "API key has been saved",
    });
    
    onApiKeySet();
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Hume AI API Key</CardTitle>
        <CardDescription>
          Add your Hume AI API key to use the chat functionality. 
          Your API key will be stored securely in your browser.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            You can get your API key from the Hume AI dashboard. 
            Visit <a href="https://hume.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline">hume.ai</a> to learn more.
          </p>
          <Input
            type="password"
            placeholder="Enter your Hume AI API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveApiKey}>
          Save API Key
        </Button>
      </CardFooter>
    </Card>
  );
};
