# Social Connect App

## Prerequisites

Before you begin, ensure you have the following installed on your machine and mobile device:

* [Node.js](https://nodejs.org/) (LTS version recommended)
* A package manager like **npm** (comes with Node.js) or **Yarn**
* The **Expo Go** app installed on your physical mobile device:
  * [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)
  * [Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

## Getting Started

Follow these steps to set up and run the project locally for testing.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

Install the required project dependencies:

```bash
npm install
```

### 3. Log in to Expo CLI

Log in to your Expo account in the command line using the non-interactive CLI command:

```bash
npx expo login --non-interactive -u YOUR_USERNAME -p YOUR_PASSWORD
```

*(Note: Replace `YOUR_USERNAME` and `YOUR_PASSWORD` with your actual Expo account credentials).*

### 4. Log in to Expo Go App

Open the **Expo Go** app on your mobile device and log in using the **same Expo account credentials** as step 3. Being logged into the same account ensures you can access development builds and project servers without permission issues.

### 5. Start the Development Server

Launch the Expo development server:

```bash
npx expo start
```

---

## Testing on Expo Go

Once the server starts, a QR code will be generated in your terminal.

1. Ensure your mobile device is connected to the **same Wi-Fi network** as your computer.
2. Open the **Expo Go** app:
   * **iOS:** Open the native **Camera app** and scan the QR code. Tap the notification banner to open the project inside Expo Go.

---
