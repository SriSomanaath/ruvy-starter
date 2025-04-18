"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import Image from "next/image"

export const Footer = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="pt-12">
        <div className="container px-4 md:px-6 lg:px-8 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative col-span-full lg:col-span-1">
            <Image src="/Logo_2.png" alt="Logo" width={180} height={180} className="mb-4" />
            <h2 className="mb-4 text-2xl font-bold">Stay Connected</h2>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers on AI, deep learning, and computer vision with OpenCV.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with us on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
                <Moon className="h-4 w-4" />
                <Label htmlFor="dark-mode" className="sr-only">
                  Toggle dark mode
                </Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">OpenCV Resources</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV AI Courses</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV for Beginners</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV Python Examples</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV C++ Projects</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Image Processing with OpenCV</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Real-time Video Analysis</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Object Detection with OpenCV</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Face Detection Tutorials</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV on Mobile Devices</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV with TensorFlow</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Deep Learning in OpenCV</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV Documentation</a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">AI & ML Topics</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-blue-600">YOLO Object Detection</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Face Recognition Systems</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Machine Learning with OpenCV</a>
              <a href="#" className="block transition-colors hover:text-blue-600">CNN vs RNN Explained</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV for Autonomous Driving</a>
              <a href="#" className="block transition-colors hover:text-blue-600">AI-Powered Surveillance</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV for Robotics</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV with GANs</a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Developer Tools</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV SDK</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Model Training Toolkit</a>
              <a href="#" className="block transition-colors hover:text-blue-600">CVAT Annotation Tool</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV DNN Module</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Pre-trained AI Models</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Real-Time Model Deployment</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Model Optimization Techniques</a>
              <a href="#" className="block transition-colors hover:text-blue-600">Data Augmentation Scripts</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV Integration with Flask</a>
              <a href="#" className="block transition-colors hover:text-blue-600">OpenCV with Docker</a>
            </nav>
          </div>
        </div>

        <div className="text-white bg-black">
          <div className="container px-4 md:px-6 lg:px-8 mt-12 flex flex-col items-center justify-between gap-4 border-t py-4 text-center md:flex-row">
            <p className="text-sm">© 2024 OpenCV Company. All rights reserved.</p>
            <nav className="flex gap-4 text-sm">
              <a href="#" className="transition-colors hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-blue-600">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-blue-600">Cookie Settings</a>
            </nav>            
          </div>
        </div>
      </div>
    </footer>
  )
}
