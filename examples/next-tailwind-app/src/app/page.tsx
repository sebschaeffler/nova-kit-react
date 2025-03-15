"use client";

import "nova-kit-react/nova-styles.css";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ConfirmationDialog,
  Label,
  Switch,
} from "nova-kit-react/components";
import { FlowerIcon, Terminal } from "lucide-react";
import { useState } from "react";
import { HTTP_REQUEST_TYPE, NovaError, NovaHTTPRequest } from "nova-kit-react/lib";

export default function App() {
  const [mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const error: NovaError = {
    code: 500,
    message: "Internal ServerError Test",
  };

  const request: NovaHTTPRequest = new NovaHTTPRequest().setRequestType(HTTP_REQUEST_TYPE.GET).setRequestEndpoint("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className={`flex align-center justify-start ${mode} flex-col h-[100vh]`}>
      <h1 className="text-3xl font-bold underline">
        Built using Nova Kit
      </h1>
      <div className="flex gap-4 justify-center py-4">
        <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
        <Button
          variant="destructive">Delete</Button>
        <ConfirmationDialog
          isFullWidth={false}
          trigger={
            <Button variant="ghost" className="flex gap-2" type="reset">
              <FlowerIcon size={16} />
            </Button>
          }
          title="Spread happiness to the rest of the world?"
          description="This action will make you proud."
          confirmText="Go"
          onConfirm={() => console.log("Confirmed!")}
        />
      </div>

      <div className="flex py-4 gap-4 items-center">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/86175725?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-4">
          <Switch id="shiba" />
          <Label htmlFor="shiba">Shiba Mode</Label>
        </div>
      </div>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">List</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage
              className="font-semibold">Credentials</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="py-4">
        <Alert className="space-y-4 pb-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Error: {error.message} <br />
            Request endpoint: {request.getRequestEndpoint()}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

