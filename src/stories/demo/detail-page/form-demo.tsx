// @ts-nocheck
"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/form/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Check,
  Moon,
  Paintbrush,
  Palette,
  Save,
  Sun,
  User,
} from "lucide-react";
import { cn } from "@/utils/style-utils";
import { toast } from "sonner";
import { Toaster } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// ── Schema ───────────────────────────────────────────────────────────────────

const ProfileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  username: z.string().min(2, "Username must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  bio: z
    .string()
    .max(500, "Bio must be under 500 characters.")
    .optional()
    .or(z.literal("")),
});

type ProfileValues = z.infer<typeof ProfileSchema>;

// ── Accent colour palette ────────────────────────────────────────────────────

const ACCENT_COLORS = [
  { name: "Slate", value: "slate", ring: "bg-[hsl(217,19%,27%)]" },
  { name: "Blue", value: "blue", ring: "bg-[hsl(221,83%,53%)]" },
  { name: "Violet", value: "violet", ring: "bg-[hsl(263,70%,50%)]" },
  { name: "Rose", value: "rose", ring: "bg-[hsl(347,77%,50%)]" },
  { name: "Orange", value: "orange", ring: "bg-[hsl(25,95%,53%)]" },
  { name: "Green", value: "green", ring: "bg-[hsl(142,71%,45%)]" },
] as const;

// CSS variable overrides per accent colour
const accentOverrides: Record<string, Record<string, string>> = {
  slate: {},
  blue: {
    "--primary": "221 83% 53%",
    "--primary-hover": "221 83% 43%",
    "--primary-foreground": "0 0% 100%",
    "--ring": "221 83% 53%",
  },
  violet: {
    "--primary": "263 70% 50%",
    "--primary-hover": "263 70% 40%",
    "--primary-foreground": "0 0% 100%",
    "--ring": "263 70% 50%",
  },
  rose: {
    "--primary": "347 77% 50%",
    "--primary-hover": "347 77% 40%",
    "--primary-foreground": "0 0% 100%",
    "--ring": "347 77% 50%",
  },
  orange: {
    "--primary": "25 95% 53%",
    "--primary-hover": "25 95% 43%",
    "--primary-foreground": "0 0% 100%",
    "--ring": "25 95% 53%",
  },
  green: {
    "--primary": "142 71% 45%",
    "--primary-hover": "142 71% 35%",
    "--primary-foreground": "0 0% 100%",
    "--ring": "142 71% 45%",
  },
};

// ── Profile Tab ──────────────────────────────────────────────────────────────

function ProfileTab({ form }: { form: ReturnType<typeof useForm<ProfileValues>> }) {
  return (
    <div className="space-y-8">
      {/* Avatar section */}
      <div className="flex items-center gap-6">
        <Avatar size="lg" className="size-20">
          <AvatarImage
            src="https://api.dicebear.com/9.x/avataaars/svg?seed=nova"
            alt="User avatar"
          />
          <AvatarFallback className="text-lg">NS</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground">Profile Picture</h3>
          <p className="text-sm text-muted-foreground">
            Click to upload a new avatar. JPG, PNG or GIF. 1 MB max.
          </p>
          <div className="flex gap-2 pt-1">
            <Button type="button" variant="outline" size="sm" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              Upload
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              Remove
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      {/* Name fields */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name *</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name *</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Username & Email */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username *</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@company.com" {...field} />
              </FormControl>
              <FormDescription>Your company email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Bio */}
      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us a little about yourself…"
                className="min-h-25 resize-none"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Brief description for your profile.{" "}
              <span className="text-muted-foreground/70">Max 500 characters.</span>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

// ── Appearance Tab ───────────────────────────────────────────────────────────

function AppearanceTab({
  isDark,
  setIsDark,
  accent,
  setAccent,
  fontSize,
  setFontSize,
}: {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
  accent: string;
  setAccent: (v: string) => void;
  fontSize: string;
  setFontSize: (v: string) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Dark mode */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
            {isDark ? (
              <Moon className="size-5 text-foreground" />
            ) : (
              <Sun className="size-5 text-foreground" />
            )}
          </div>
          <div className="space-y-0.5">
            <Label className="text-base font-medium">Dark Mode</Label>
            <p className="text-sm text-muted-foreground">
              Toggle between light and dark themes.
            </p>
          </div>
        </div>
        <Switch checked={isDark} onCheckedChange={setIsDark} />
      </div>

      <Separator />

      {/* Accent colour */}
      <div className="space-y-4">
        <div className="space-y-1">
          <Label className="text-base font-medium flex items-center gap-2">
            <Palette className="size-4" />
            Accent Colour
          </Label>
          <p className="text-sm text-muted-foreground">
            Choose the primary colour used throughout the interface.
          </p>
        </div>
        <RadioGroup
          value={accent}
          onValueChange={setAccent}
          className="flex flex-wrap gap-3"
        >
          {ACCENT_COLORS.map((color) => (
            <TooltipProvider key={color.value}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Label
                    htmlFor={`color-${color.value}`}
                    className={cn(
                      "relative flex size-10 cursor-pointer items-center justify-center rounded-full border-2 transition-all",
                      accent === color.value
                        ? "border-foreground scale-110"
                        : "border-transparent hover:scale-105",
                    )}
                  >
                    <RadioGroupItem
                      id={`color-${color.value}`}
                      value={color.value}
                      className="sr-only"
                    />
                    <span className={cn("block size-8 rounded-full", color.ring)} />
                    {accent === color.value && (
                      <Check className="absolute size-4 text-white drop-shadow-md" />
                    )}
                  </Label>
                </TooltipTrigger>
                <TooltipContent>{color.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      {/* Font size */}
      <div className="space-y-4">
        <div className="space-y-1">
          <Label className="text-base font-medium flex items-center gap-2">
            <Paintbrush className="size-4" />
            Font Size
          </Label>
          <p className="text-sm text-muted-foreground">
            Adjust the base font size for the interface.
          </p>
        </div>
        <Select value={fontSize} onValueChange={setFontSize}>
          <SelectTrigger className="w-50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="14">Small (14px)</SelectItem>
            <SelectItem value="16">Default (16px)</SelectItem>
            <SelectItem value="18">Large (18px)</SelectItem>
            <SelectItem value="20">Extra Large (20px)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

// ── Notifications Tab ────────────────────────────────────────────────────────

function NotificationsTab() {
  const [emailNotifs, setEmailNotifs] = React.useState(true);
  const [marketingEmails, setMarketingEmails] = React.useState(false);
  const [socialNotifs, setSocialNotifs] = React.useState(true);
  const [securityAlerts, setSecurityAlerts] = React.useState(true);
  const [frequency, setFrequency] = React.useState("realtime");

  return (
    <div className="space-y-8">
      {/* Master toggle */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
            <Bell className="size-5 text-foreground" />
          </div>
          <div className="space-y-0.5">
            <Label className="text-base font-medium">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications via email.
            </p>
          </div>
        </div>
        <Switch checked={emailNotifs} onCheckedChange={setEmailNotifs} />
      </div>

      <Separator />

      {/* Notification types */}
      <div className="space-y-4">
        <Label className="text-base font-medium">Notification Types</Label>
        <div className="space-y-4 rounded-lg border p-4">
          <div className="flex items-start gap-3">
            <Checkbox
              id="marketing"
              checked={marketingEmails}
              onCheckedChange={(v) => setMarketingEmails(!!v)}
              disabled={!emailNotifs}
            />
            <div className="space-y-0.5">
              <Label htmlFor="marketing" className="font-medium">
                Marketing emails
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about new products, features, and offers.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex items-start gap-3">
            <Checkbox
              id="social"
              checked={socialNotifs}
              onCheckedChange={(v) => setSocialNotifs(!!v)}
              disabled={!emailNotifs}
            />
            <div className="space-y-0.5">
              <Label htmlFor="social" className="font-medium">
                Social notifications
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications when someone mentions or follows you.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex items-start gap-3">
            <Checkbox
              id="security"
              checked={securityAlerts}
              onCheckedChange={(v) => setSecurityAlerts(!!v)}
              disabled={!emailNotifs}
            />
            <div className="space-y-0.5">
              <Label htmlFor="security" className="font-medium flex items-center gap-2">
                Security alerts
                <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                  Required
                </Badge>
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive alerts for unusual sign-in activity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Frequency */}
      <div className="space-y-4">
        <div className="space-y-1">
          <Label className="text-base font-medium">Digest Frequency</Label>
          <p className="text-sm text-muted-foreground">
            How often would you like to receive notification digests?
          </p>
        </div>
        <Select value={frequency} onValueChange={setFrequency} disabled={!emailNotifs}>
          <SelectTrigger className="w-50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="realtime">Real-time</SelectItem>
            <SelectItem value="daily">Daily digest</SelectItem>
            <SelectItem value="weekly">Weekly digest</SelectItem>
            <SelectItem value="monthly">Monthly digest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

// ── Main Demo Component ──────────────────────────────────────────────────────

const FormDemo = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [accent, setAccent] = React.useState("slate");
  const [fontSize, setFontSize] = React.useState("16");

  const form = useForm<ProfileValues>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      bio: "",
    },
  });

  function onSubmit(data: ProfileValues) {
    toast.success("Profile saved successfully!", {
      description: (
        <pre className="mt-2 max-w-85 overflow-auto rounded-md bg-foreground/5 p-3 text-xs">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  // Build inline style overrides for accent colour
  const styleOverrides = React.useMemo(() => {
    const overrides = accentOverrides[accent] || {};
    return {
      ...overrides,
      fontSize: `${fontSize}px`,
    } as React.CSSProperties;
  }, [accent, fontSize]);

  return (
    <div
      className={cn(
        "min-h-screen w-full transition-colors duration-300",
        isDark ? "dark" : "",
      )}
      style={styleOverrides}
    >
      <div className="min-h-screen w-full bg-background p-4 sm:p-6 lg:p-10">
        <Toaster
          theme={isDark ? "dark" : "light"}
          toastOptions={{
            style: {
              "--normal-bg": "hsl(var(--popover))",
              "--normal-text": "hsl(var(--popover-foreground))",
              "--normal-border": "hsl(var(--border))",
            } as React.CSSProperties,
          }}
        />

        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Settings
              </h1>
              <p className="mt-1 text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsDark((prev) => !prev)}
                    className="rounded-full"
                  >
                    {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isDark ? "Switch to light mode" : "Switch to dark mode"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Main card */}
        <Card className="mx-auto max-w-3xl">
          <Tabs defaultValue="profile" className="w-full">
            <CardHeader className="pb-0">
              <TabsList variant="line" className="w-full justify-start">
                <TabsTrigger value="profile" className="gap-2">
                  <User className="size-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="appearance" className="gap-2">
                  <Palette className="size-4" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="size-4" />
                  Notifications
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent className="pt-6">
              {/* ── Profile ─────────────────────────────────── */}
              <TabsContent value="profile">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <ProfileTab form={form} />
                    <Separator />
                    <div className="flex justify-end gap-3">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => form.reset()}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">
                        <Save className="size-4" />
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </Form>
              </TabsContent>

              {/* ── Appearance ──────────────────────────────── */}
              <TabsContent value="appearance">
                <AppearanceTab
                  isDark={isDark}
                  setIsDark={setIsDark}
                  accent={accent}
                  setAccent={setAccent}
                  fontSize={fontSize}
                  setFontSize={setFontSize}
                />
              </TabsContent>

              {/* ── Notifications ───────────────────────────── */}
              <TabsContent value="notifications">
                <NotificationsTab />
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* Footer hint */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
          This demo showcases Card, Tabs, Form, Input, Textarea, Avatar, Switch,
          Select, Checkbox, RadioGroup, Badge, Tooltip, Separator, and Button components
          — with live theme customisation.
        </p>
      </div>
    </div>
  );
};

export default FormDemo;
