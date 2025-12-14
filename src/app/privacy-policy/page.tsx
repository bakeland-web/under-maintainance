import React from 'react';
import { Box, Typography } from '@/components/atoms';

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dark Transparent Overlay */}
      <div className="absolute inset-0 z-5 bg-black/30"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/landing/bg.gif"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <Typography
          as="h1"
          font="pixellari"
          className="mb-6 text-3xl sm:text-4xl text-white text-center font-normal"
          textStroke="none"
        >
          Privacy Policy
        </Typography>

        <div className="mx-auto w-full max-w-5xl">
          <Box
            variant="wood"
            size="lg"
            className="w-full h-[65vh]"
            innerStyles="p-4 overflow-y-auto"
          >
            <div className="w-full text-white/90 space-y-4">
              <Typography as="h2" font="pixellari" className="text-xl">
                2. Privacy Policy
              </Typography>
              <p className="font-pixellari text-xs opacity-80">Effective Date: 20 November 2025</p>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.1. Introduction</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  Bakeland (“we”, “us”, “our”) is committed to protecting player privacy. This Privacy Policy explains what data we collect, why, and how we process it.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.2. Controller and Contact</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  Operator: 8 Bit Studio Ltd., British Virgin Islands. Contact: support@bakeland.xyz
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.3. Data We Collect</Typography>
                <p className="font-pixellari text-sm leading-relaxed font-semibold">A. Information You Provide</p>
                <ul className="list-disc pl-5 space-y-1 font-pixellari text-sm">
                  <li>Account registration details (username, email, country)</li>
                  <li>Wallet addresses and transaction history relevant to in-game operations</li>
                  <li>Payment information submitted to licensed payment partners (we do not store raw payment card numbers)</li>
                  <li>User content (chat messages, avatar customizations, uploaded images)</li>
                </ul>
                <p className="font-pixellari text-sm leading-relaxed font-semibold">B. Automatically Collected Data</p>
                <ul className="list-disc pl-5 space-y-1 font-pixellari text-sm">
                  <li>Device identifiers and hardware info</li>
                  <li>IP address and geolocation (approximate)</li>
                  <li>Usage data (session times, in-game actions, logs)</li>
                  <li>Crash and diagnostic reports</li>
                </ul>
                <p className="font-pixellari text-sm leading-relaxed font-semibold">C. On-Chain Data</p>
                <p className="font-pixellari text-sm leading-relaxed">
                  Public blockchain addresses and transactions involving our smart contracts are public and not controlled by the Operator. We may record on-chain interactions that occur within our smart contracts for service functionality and dispute resolution.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.4. Purpose & Legal Bases</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  We process data to: (a) provide and maintain the Service; (b) process payments and manage accounts; (c) detect and prevent fraud and abuse; (d) comply with legal obligations; (e) personalize user experience; (f) improve the Game.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  Where applicable, we rely on legal bases including performance of contract, legitimate interests (security, fraud prevention), and legal obligations.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.5. Sharing & Third Parties</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  Trusted service providers (analytics, hosting, payment/VASP partners) process data on our behalf.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  For fiat on/off ramps, identity verification (KYC) providers may process user identity data under their terms.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  We may disclose data to comply with legal processes, enforce terms, or respond to emergencies.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.6. International Transfers</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  Data may be processed in jurisdictions outside your country, including the BVI and other service provider locations. We implement safeguards to protect data during transfer.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.7. Data Retention</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  We retain personal data as long as needed to provide the Service, comply with legal obligations, resolve disputes, and enforce agreements. Retention periods vary by data category.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.8. Security</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  We employ administrative, technical, and physical safeguards (encryption-in-transit, access controls, security reviews). However, no system is perfect; you must secure wallets and private keys.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.9. Your Rights</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  Subject to local law, you may have rights to access, correct, delete, object to processing, and data portability. For requests, contact team@bakeland.xyz. We may require identity verification.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.10. Children</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  We do not knowingly target children under the applicable age. If we learn we have collected data from a child without consent, we will take steps to delete it.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">2.11. Changes to Privacy Policy</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  We will notify material changes and update the effective date. Continued use indicates acceptance.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h2" font="pixellari" className="text-xl">3. End-User License Agreement (EULA)</Typography>
                <p className="font-pixellari text-xs opacity-80">Effective Date: 20 November 2025</p>
                <p className="font-pixellari text-sm leading-relaxed">
                  3.1. License Grant — Subject to your compliance with these Terms and payment of applicable fees, the Operator grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Game for personal, non-commercial entertainment.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  3.2. Ownership — All rights, title, and interest in the Game and associated intellectual property remain with the Operator and its licensors. NFTs minted by users remain user-owned on-chain but the Operator retains IP in game assets and branding.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  3.3. Restrictions — You may not: (a) reverse engineer, decompile, or modify the Game client; (b) redistribute or sell the Game client; (c) use the Game for commercial hosting or streaming products except as permitted in writing; (d) remove or alter copyright notices.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  3.4. User-Created Content — By creating, uploading, or minting content, you grant the Operator a worldwide, royalty-free license to use and display the content in connection with the Service.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  3.5. Security and Keys — You are solely responsible for wallet security. Lost private keys or compromised wallets are not the Operator’s responsibility.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  3.6. Updates and Maintenance — The Operator may provide updates, patches, or discontinue features. You agree that the Operator may update the Game automatically.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  3.7. Termination — The Operator may suspend or terminate this license for violations of these Terms or EULA.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  3.8. Warranty Disclaimer — The Game is provided “as is”. The Operator disclaims all warranties to the fullest extent permitted by law.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  3.9. Limitation of Liability — See Terms Section 1.11 for limits on liability.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h2" font="pixellari" className="text-xl">4. Data Processing Addendum (DPA)</Typography>
                <p className="font-pixellari text-xs opacity-80">Effective Date: 20 November 2025</p>
                <p className="font-pixellari text-sm leading-relaxed">
                  This DPA sets out the data protection obligations for processing personal data where the Operator acts as a data controller and, where applicable, as a processor in relation to customer data.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.1. Roles — Controller: 8 Bit Studio Ltd. determines the purposes and means of processing personal data. Processor / Sub-Processor: Third-party services (hosting, analytics, KYC providers) process data on behalf of Bakeland Ltd.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.2. Subject Matter and Duration — Subject Matter: Processing of personal data necessary for offering, maintaining, and improving Bakeland, including account data, gameplay data, wallet information, blockchain interactions, user-generated content, security logs, and technical data. Duration: Personal data will be processed for as long as the user maintains an active account, or as required for legal, regulatory, fraud-prevention, or dispute-resolution purposes.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.3. Types of Personal Data & Categories of Data Subjects — Types of Data: email, username, IP address, wallet address, transaction hashes, payment verification data (via partners), device info, gameplay logs, UGC, metadata, crash logs. Categories of Data Subjects: Bakeland players, wallet-connected participants, visitors, customer support requesters.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.4. Purpose of Processing — Personal data is processed solely for: - providing the Bakeland service - enabling in-game and blockchain functionality - processing payments and verifying transactions - maintaining account integrity and preventing fraud - meeting regulatory and tax obligations (including AML/KYC when required) - customer support and dispute resolution - improving and securing the Game
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.5. Security Measures — Bakeland implements industry-standard security measures including but not limited to: - encryption of data in transit - secured access controls with role-based permissions - smart contract audits and monitoring - routine penetration testing - incident response protocols - secure backup and archival
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.6. Subprocessors — Bakeland may engage subprocessors for hosting, blockchain infrastructure, analytics, support systems, payment/KYC verification, or fraud screening. A list of subprocessors will be maintained and supplied upon written request.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.7. Data Subject Rights — Bakeland will reasonably assist with: - access to personal data - correction of inaccurate data - deletion requests when legally permissible - export or portability requests - objections to processing when applicable. Identity verification may be required for compliance and fraud-prevention.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.8. International Transfers — Personal data may be transferred to jurisdictions outside the BVI. Safeguards include contractual protections, encrypted transmission, and partnerships with compliant processors.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.9. Audit and Compliance Assistance — Upon reasonable written request, Bakeland will provide documentation demonstrating compliance with this DPA. Audits may be permitted under confidentiality terms and with reasonable notice.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.10. Breach Notification Procedures — If Bakeland becomes aware of a personal data breach that is likely to result in risk to users, affected individuals will be notified as required by applicable law. Notifications will include: - nature of breach - categories of affected data - steps taken to mitigate harm - contact details for further information
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  4.11. Data Deletion and Return — Once data processing is no longer required, Bakeland will: - delete or anonymize personal data, or - return it to the user upon request (where permitted). Residual blockchain data cannot be deleted as it is immutable; however, Bakeland minimizes on-chain personal data.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h2" font="pixellari" className="text-xl">5. Token-Specific Risk Disclosure</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  Tokens and Digital Items may have speculative value and are subject to volatility. Blockchain transactions are irreversible. Regulatory status of tokens varies by jurisdiction; your local laws may restrict certain activities. Do not consider in-game tokens as investment advice.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h2" font="pixellari" className="text-xl">6. Contact</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  For legal requests, privacy inquiries, or DPA/subprocessor inquiries, contact: team@bakeland.xyz.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h2" font="pixellari" className="text-xl">7. Versioning</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  Document versions, effective dates, and change logs should be recorded here. Users must be presented with updated documents and accept materially changed terms.
                </p>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}


