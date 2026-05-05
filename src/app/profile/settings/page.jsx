"use client";

import { useState } from "react";
import { ProfileShell } from "@/components/profile/profile-shell";

export default function ProfileSettingsPage() {
  const [saved, setSaved] = useState(false);

  return (
    <ProfileShell title="Profile Settings" description="Update your contact and preference details.">
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSaved(true);
        }}
      >
        <input required className="h-11 w-full rounded-xl border border-slate-300 px-4" placeholder="Full name" />
        <input required className="h-11 w-full rounded-xl border border-slate-300 px-4" placeholder="Email address" />
        <input required className="h-11 w-full rounded-xl border border-slate-300 px-4" placeholder="Phone number" />
        <button type="submit" className="rounded-full bg-slate-900 px-6 py-2.5 font-semibold text-white hover:bg-slate-700">
          Save Changes
        </button>
        {saved ? <p className="text-sm font-semibold text-green-700">Profile settings saved.</p> : null}
      </form>
    </ProfileShell>
  );
}
