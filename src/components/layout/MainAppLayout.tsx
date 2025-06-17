import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface MainAppLayoutProps {
  children: React.ReactNode;
  /** Additional classes for the main wrapping element (semantic <main> tag). Defaults to 'w-full max-w-md'. */
  mainContainerClassName?: string;
  /** Additional classes for the Card component. Defaults to 'w-full shadow-md'. */
  cardClassName?: string;
  /** Additional classes for the CardContent component. Defaults to 'p-6 flex flex-col items-center gap-4'. */
  contentClassName?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  mainContainerClassName,
  cardClassName,
  contentClassName,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <main role="main" className={cn('w-full max-w-md', mainContainerClassName)}>
        <Card className={cn('w-full shadow-md', cardClassName)}>
          {/* Default Card from Shadcn provides: rounded-lg, border, bg-card, text-card-foreground. */}
          {/* 'shadow-md' is added as per Layout Requirements, as Shadcn Card default might be 'shadow' or 'shadow-sm'. */}
          {/* 'w-full' ensures the card takes the full width of its parent <main> container. */}
          <CardContent
            className={cn(
              'p-6 flex flex-col items-center gap-4',
              // 'p-6': Padding as per Layout Requirements for the main content container.
              // 'flex flex-col items-center gap-4': Flex properties for content stacking and alignment within the card.
              contentClassName
            )
          }
          >
            {children}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default MainAppLayout;
