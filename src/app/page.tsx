import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – Lineage',
  description:
    'Privacy Policy for the Lineage mobile app. Learn what data we collect, how we use it, and your rights.',
  keywords: [
    'privacy policy',
    'Lineage app',
    'chat',
    'Stream Chat',
    'Firebase Authentication',
    'Node.js backend',
    'OneSignal',
    'Expo',
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">Last updated: July 20, 2023</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Lineage. We value your privacy and strive to be transparent
          about the data we collect, how we use it, and your rights with respect
          to your information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Device &amp; Usage Data:</strong> Automatically collected
            analytics (app version, device model, OS version) via Expo.
          </li>
          <li>
            <strong>Push Notification Tokens:</strong> We use OneSignal to send
            you notifications; your device token is stored securely by OneSignal.
          </li>
          <li>
            <strong>Authentication Data:</strong> If you create an account, we
            collect only the information you provide (e.g. email).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
        <p>
          We use your information to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide and maintain app functionality.</li>
          <li>Send you personalized push notifications (with your consent).</li>
          <li>Analyze usage patterns to improve features and performance.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Third-Party Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>OneSignal:</strong> Manages push notifications. Please refer
            to{' '}
            <a
              href="https://onesignal.com/privacy_policy"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              their Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Firebase (FCM):</strong> Used by OneSignal on Android for
            delivery of notifications.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Chat Functionality</h2>
        <p>
          We use Stream Chat to provide real-time messaging. To enable this,
          we share your display name and, optionally, your profile picture with
          Stream Chat. Chat messages and related metadata are processed and
          stored by Stream Chat.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Authentication &amp; Backend</h2>
        <p>
          We use Firebase Authentication to manage user sign-ups and sign-ins.
          We collect the information you provide (e.g., email) and send it to
          our custom Node.js backend. Our backend processes and stores data
          necessary for app functionality, including user profiles,
          notifications, and chat history.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data
          both in transit and at rest.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Children's Privacy</h2>
        <p>
          Our app is not intended for children under 13. We do not knowingly
          collect personally identifiable information from children under 13.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Changes to This Policy</h2>
        <p>
          We may update this policy occasionally. When we do, we'll update the
          "Last updated" date at the top of this page and notify you via the app.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have any questions or concerns, please email us at{' '}
          <a
            href="mailto:privacy@lineageapp.com"
            className="text-blue-600 hover:underline"
          >
            privacy@lineageapp.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
