import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zuma Frontier Project",
  description: "Privacy policy for Zuma Frontier Project - How we handle data and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-light mb-8 font-mono">Privacy Policy</h1>
        
        <div className="space-y-8 text-white/70 font-light">
          <section>
            <h2 className="text-xl font-normal text-white mb-4">Overview</h2>
            <p>
              Zuma Frontier Project is committed to protecting your privacy. This policy explains how we collect, 
              use, and safeguard your information when you use our internal AI tools and applications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Employee ID and basic profile information for authentication</li>
              <li>Usage data to improve our AI systems</li>
              <li>Workflow and operational data processed by AI tools</li>
              <li>Feedback and interaction data with AI assistants</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and improve AI-powered tools and services</li>
              <li>To train and optimize AI models for better performance</li>
              <li>To analyze usage patterns and enhance user experience</li>
              <li>To ensure security and prevent unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Data Security</h2>
            <p>
              All data is stored within Zuma Indonesia&apos;s secure infrastructure. We use enterprise-grade 
              encryption, access controls, and monitoring to protect your information. Data never leaves 
              our controlled environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Your Rights</h2>
            <p>
              As a Zuma employee, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Access your personal data</li>
              <li>Request corrections to inaccurate information</li>
              <li>Understand how your data is being used</li>
              <li>Contact the Continuous Improvement Team with privacy concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Contact Us</h2>
            <p>
              For privacy-related questions or concerns, please contact the Continuous Improvement Team 
              through your department head or email frontier-project@zuma.id.
            </p>
          </section>

          <p className="text-sm text-white/50 pt-8 border-t border-white/10">
            Last updated: February 2026
          </p>
        </div>
      </div>
    </main>
  );
}
