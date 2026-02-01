import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Zuma Frontier Project",
  description: "Terms of service for Zuma Frontier Project - Guidelines for using our internal AI tools and applications.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-light mb-8 font-mono">Terms of Service</h1>
        
        <div className="space-y-8 text-white/70 font-light">
          <section>
            <h2 className="text-xl font-normal text-white mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using Zuma Frontier Project tools and applications, you agree to these Terms of Service. 
              These tools are provided exclusively for Zuma Indonesia employees for business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Eligibility</h2>
            <p>
              Access to Frontier Project tools is restricted to authorized Zuma Indonesia employees. 
              You must use your official Zuma credentials to access these systems. Sharing access 
              credentials with unauthorized individuals is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Acceptable Use</h2>
            <p>You agree to use Frontier Project tools only for:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Official Zuma Indonesia business operations</li>
              <li>Workflows and tasks within your authorized scope</li>
              <li>Improving operational efficiency and decision-making</li>
              <li>Collaborating with colleagues on approved projects</li>
            </ul>
            <p className="mt-4">You may not use these tools for:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Personal or non-business purposes</li>
              <li>Sharing confidential information outside the organization</li>
              <li>Attempting to bypass security measures</li>
              <li>Activities that could harm Zuma Indonesia or its stakeholders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Data Usage</h2>
            <p>
              All data processed through Frontier Project tools remains property of Zuma Indonesia. 
              AI models may process your inputs to provide responses and improve services. Do not input 
              highly sensitive personal information unless necessary for business operations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Intellectual Property</h2>
            <p>
              All AI-generated content, workflows, and outputs created using Frontier Project tools 
              are the property of Zuma Indonesia. You may use these outputs for official business 
              purposes in accordance with company policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Limitations of Liability</h2>
            <p>
              AI tools provide assistance but may not always be accurate. You are responsible for 
              reviewing and validating AI-generated outputs before using them in critical business 
              decisions. Zuma Indonesia is not liable for errors or omissions in AI-generated content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Modifications</h2>
            <p>
              These terms may be updated as the Frontier Project evolves. Continued use of the tools 
              after changes constitutes acceptance of the updated terms. Significant changes will be 
              communicated through official channels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-normal text-white mb-4">Contact</h2>
            <p>
              For questions about these terms, contact the Continuous Improvement Team at 
              frontier-project@zuma.id or through your department head.
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
