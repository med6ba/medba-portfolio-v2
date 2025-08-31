"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RequestPage() {
  const [state, setState] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gray-50">
      <form
        action="https://formspree.io/f/mwpnladk"
        method="POST"
        className="w-full max-w-3xl bg-white shadow-xl rounded-3xl p-6 sm:p-10 space-y-6 sm:space-y-8"
      >
        {/* Header */}
        <h3 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-gray-800 justify-center">
          <a href="/" className="text-gray-600 hover:text-gray-900 transition">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          Request a Website
        </h3>

        {/* Two-column layout for large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input
              id="full-name"
              name="full-name"
              placeholder="Enter your full name"
              required
              className="rounded-lg shadow-sm"
            />
          </div>

          {/* Business Name */}
          <div className="space-y-2">
            <Label htmlFor="business">Business Name</Label>
            <Input
              id="business"
              name="business"
              placeholder="Enter your business name"
              required
              className="rounded-lg shadow-sm"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="rounded-lg shadow-sm"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+212 600 000 000"
              className="rounded-lg shadow-sm"
            />
          </div>

          {/* Budget */}
          <div className="space-y-2 lg:col-span-2">
            <Label htmlFor="budget">Project Budget (Optional)</Label>
            <Select name="budget">
              <SelectTrigger className="rounded-lg shadow-sm w-full">
                <SelectValue placeholder="Select a budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<1000">Less than 1000dh</SelectItem>
                <SelectItem value="1000-3000">1000dh - 3000dh</SelectItem>
                <SelectItem value="3000-5000">3000dh - 5000dh</SelectItem>
                <SelectItem value=">5000">+5000dh</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Project Details */}
          <div className="space-y-2 lg:col-span-2">
            <Label htmlFor="details">Project Details</Label>
            <Textarea
              id="details"
              name="details"
              placeholder="Describe your project in detail..."
              required
              className="rounded-lg shadow-sm min-h-[140px]"
            />
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full py-3 text-lg font-semibold rounded-xl hover:shadow-lg transition-all"
        >
          Submit Request
        </Button>
      </form>
    </div>
  );
}
