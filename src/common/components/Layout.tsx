import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-space">
        <div className="container mx-auto text-center py-10 px-2">
          {children}
        </div>
      </div>
    </>
  );
}
