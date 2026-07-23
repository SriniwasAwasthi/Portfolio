'use client';

import * as React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  /** Optional section name for contextual fallback message */
  sectionName?: string;
  /** Optional custom fallback UI */
  fallback?: React.ReactNode;
}

/**
 * React class-based Error Boundary.
 * Wraps individual portfolio sections so a failure in one
 * does not crash the entire page.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // In production, send to an error reporting service here
    if (process.env.NODE_ENV === 'development') {
      console.error(`[ErrorBoundary] Section: ${this.props.sectionName ?? 'unknown'}`, error, info);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          className="flex flex-col items-center justify-center py-20 px-6 text-center gap-4"
        >
          <div className="p-4 rounded-full bg-destructive/10 text-destructive">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="space-y-1.5 max-w-sm">
            <h3 className="font-heading font-bold text-base text-foreground">
              {this.props.sectionName
                ? `Could not load "${this.props.sectionName}"`
                : 'Something went wrong'}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This section encountered an unexpected error. The rest of the page is unaffected.
            </p>
          </div>
          <button
            onClick={this.handleReset}
            className="flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
