"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [profile, setProfile] = useState({
    avatar: null,
    banner: null,
    name: "",
    bio: "",
    website: "",
    skills: [],
  });

  const [newSkill, setNewSkill] = useState("");

  return (
    <div className="page">
      <div className="page-header">
        <p className="page-kicker">Dashboard</p>
        <h1 className="page-title">Your Creator Profile</h1>
        <p className="page-subtitle">
          Customize your identity, manage certifications, and explore all Art‑hur tools.
        </p>
      </div>

      {/* Banner */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 className="card-title">Banner Image</h2>
        <input
          type="file"
          className="form-input"
          onChange={(e) =>
            setProfile({ ...profile, banner: e.target.files[0] })
          }
        />
      </div>

      {/* Avatar + Info */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 className="card-title">Profile Details</h2>

        <div className="form-row">
          <label className="form-label">Avatar</label>
          <input
            type="file"
            className="form-input"
            onChange={(e) =>
              setProfile({ ...profile, avatar: e.target.files[0] })
            }
          />
        </div>

        <div className="form-row">
          <label className="form-label">Display Name</label>
          <input
            className="form-input"
            placeholder="Your creator name"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />
        </div>

        <div className="form-row">
          <label className="form-label">Bio</label>
          <textarea
            className="form-textarea"
            placeholder="Tell the world who you are"
            value={profile.bio}
            onChange={(e) =>
              setProfile({ ...profile, bio: e.target.value })
            }
          />
        </div>

        <div className="form-row">
          <label className="form-label">Website</label>
          <input
            className="form-input"
            placeholder="https://"
            value={profile.website}
            onChange={(e) =>
              setProfile({ ...profile, website: e.target.value })
            }
          />
        </div>
      </div>

      {/* Skills */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 className="card-title">Skills</h2>

        <div className="form-row" style={{ display: "flex", gap: "1rem" }}>
          <input
            className="form-input"
            placeholder="Add a skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button
            className="btn-primary"
            onClick={() => {
              if (!newSkill.trim()) return;
              setProfile({
                ...profile,
                skills: [...profile.skills, newSkill.trim()],
              });
              setNewSkill("");
            }}
          >
            Add
          </button>
        </div>

        <div className="pills" style={{ marginTop: "1rem" }}>
          {profile.skills.map((skill, i) => (
            <span key={i} className="pill">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Feature Grid */}
      <div className="page-header">
        <h2 className="page-title">Your Tools</h2>
      </div>

      <div className="grid grid-3">
        <a href="/upload" className="card">
          <div className="card-title">Upload & Certify</div>
          <p className="card-body">
            Start a new certification for art, books, or films.
          </p>
        </a>

        <a href="/explore" className="card">
          <div className="card-title">Explore Marketplace</div>
          <p className="card-body">
            Browse certified works and discover creators.
          </p>
        </a>

        <a href="/certified" className="card">
          <div className="card-title">Your Certifications</div>
          <p className="card-body">
            View all pieces you’ve authenticated with the Art‑hur Seal.
          </p>
        </a>

        <a href="/settings" className="card">
          <div className="card-title">Account Settings</div>
          <p className="card-body">
            Manage security, email, and connected accounts.
          </p>
        </a>

        <a href="/marketplace" className="card">
          <div className="card-title">Sell Your Work</div>
          <p className="card-body">
            Create listings for digital downloads or licenses.
          </p>
        </a>

        <a href="/community" className="card">
          <div className="card-title">Community</div>
          <p className="card-body">
            Join challenges, events, and creator spotlights.
          </p>
        </a>
      </div>
    </div>
  );
}
