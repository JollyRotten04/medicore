import { ThemeProvider } from "./context/theme-context";
import { PageProvider } from "./context/page-context";
import { NotificationsProvider } from "./context/notification-context";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <PageProvider>
                        <NotificationsProvider>
                            {children}
                        </NotificationsProvider>
                    </PageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}