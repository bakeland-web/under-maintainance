import React from 'react';
import { Box, Typography } from '@/components/atoms';

export default function TermsOfServicesPage() {
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
          className="mb-6 text-3xl sm:text-4xl text-white text-center"
          textStroke="normalWithShadow"
        >
          Terms of Service
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
                1. Terms of Service (“Terms”)
              </Typography>
              <p className="font-pixellari text-xs opacity-80">Effective Date: 20 November 2025</p>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.1. Acceptance</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  By accessing or using Bakeland (the “App”, “Game”, or “Service”), you agree to be bound by these Terms, the Privacy Policy, the End-User License Agreement (EULA), and any other incorporated policies. If you do not agree, do not access or use the Service.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.2. Definitions</Typography>
                <p className="font-pixellari text-sm leading-relaxed"><span className="font-semibold">Account</span>: any user account, wallet connection, or identifier used to access the Service.</p>
                <p className="font-pixellari text-sm leading-relaxed"><span className="font-semibold">User, you</span>: individual or entity using the Service.</p>
                <p className="font-pixellari text-sm leading-relaxed"><span className="font-semibold">Tokens</span>: on-chain fungible tokens used in-game.</p>
                <p className="font-pixellari text-sm leading-relaxed"><span className="font-semibold">NFTs / Digital Items</span>: non-fungible tokens or on-chain representations of in-game assets.</p>
                <p className="font-pixellari text-sm leading-relaxed"><span className="font-semibold">Operator</span>: 8 Bit Studio Ltd., incorporated in the British Virgin Islands.</p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.3. Eligibility</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  You must be legally capable of entering into binding contracts and meet any age requirements set by law in your jurisdiction. If you are under any required age, you must obtain parental consent as required.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.4. Accounts and Wallets</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  You may access the Service using an in-game non-custodial wallet or by connecting an external wallet. You are solely responsible for securing your private keys and wallet credentials. The Operator is not responsible for any loss of assets due to your failure to secure keys.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  If you connect a custodial wallet or use a custodial service provided by a third party, that third party’s terms and policies apply.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  Accounts and wallet addresses may be suspended or terminated for violations of these Terms.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.5. On-Chain Economy and Tokens</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  Bakeland includes an on-chain economy. Tokens and Digital Items may have real-world or monetary value and may be transferable outside the Game.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  Tokens issued by or used in Bakeland are described in our token documentation. Tokens are not guaranteed to retain value, and prices may fluctuate.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  The Operator does not guarantee the future value or liquidity of any Token or Digital Item and is not providing investment advice.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  Certain Token mechanics may be disabled or altered by the Operator for security, regulatory, or game-balance reasons.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.6. Purchases, Fees, and Payment</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  Purchases inside the Game may be made using fiat, Tokens, or third-party payment methods. All purchases are final except as required by law.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  Fees, taxes, and exchange costs are your responsibility.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  Where applicable, the Operator uses licensed third-party payment/VASP partners for fiat on/off ramps.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.7. Prohibited Conduct</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  You agree not to: (a) launder money, facilitate illegal activity, or breach sanctions; (b) exploit or manipulate gameplay or token economies; (c) attempt to reverse transactions or tamper with the blockchain; (d) use cheats, bots, or automation to gain unfair advantage; (e) impersonate others or infringe IP or privacy rights.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.8. Content and Intellectual Property</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  All software, artwork, music, text, and other game assets are owned or licensed by the Operator. You are granted a limited, non-exclusive, revocable license to use the Game for personal entertainment.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  You retain ownership of your user-created content and NFTs you legitimately mint or receive, subject to the Operator’s license to operate the service and display content.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  By uploading or minting content, you grant the Operator a worldwide, royalty-free license to use, reproduce, display, host, and distribute such content for providing the Service and promotional use.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.9. Suspension, Termination, and Account Recovery</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  The Operator may suspend or terminate Accounts that breach these Terms or are involved in illegal activity.
                </p>
                <p className="font-pixellari text-sm leading-relaxed">
                  The Operator has no obligation to restore lost assets and is not liable for third-party custodial failures.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.10. Disclaimers</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  The Service is provided “as is” and “as available.” The Operator disclaims all warranties to the fullest extent permitted under BVI law.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.11. Limitation of Liability</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  To the maximum extent permitted by applicable law, the Operator’s liability to you for any claim arising from your use of the Service is limited to the amount paid by you to the Service in the prior 12 months, or a nominal amount if no such payments exist. The Operator is not liable for indirect, incidental, consequential, or punitive damages.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.12. Indemnification</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  You agree to indemnify and hold harmless the Operator and its affiliates from any claims, losses, damages, liabilities, and expenses arising from your breach of these Terms or your misuse of the Service.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.13. Changes to Terms</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  The Operator may modify these Terms. Substantive changes will be posted with notice; continued use after notice constitutes acceptance.
                </p>
              </div>

              <div className="space-y-2">
                <Typography as="h3" font="pixellari" className="text-lg">1.14. Governing Law and Dispute Resolution</Typography>
                <p className="font-pixellari text-sm leading-relaxed">
                  These Terms are governed by the laws of the British Virgin Islands. Disputes shall be resolved in the courts of the BVI unless otherwise specified.
                </p>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}


