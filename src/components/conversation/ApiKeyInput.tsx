
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { setHumeApiKey, refreshApiKey } from '@/integrations/hume/humeClient';
import { toast } from '@/components/ui/use-toast';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from 'lucide-react';

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
      <CardContent className="space-y-4">
        <Alert className="bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
          <InfoIcon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertTitle>Serverless Ready</AlertTitle>
          <AlertDescription>
            This application is configured to use serverless functions for API calls to Hume AI, 
            making it ready for deployment to Vercel. Your API key is stored locally and 
            only used for authenticating requests to the Hume API.
          </AlertDescription>
        </Alert>
        
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
