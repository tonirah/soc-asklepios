import ReactMarkdown from 'react-markdown';
import { LightBulbIcon } from '@heroicons/react/outline';

export function Comment(props: { comment: string }) {
  return (
    <div className="alert alert-info text-info-content">
      <div>
        <LightBulbIcon className="h-8 w-8 flex-none" />
        <div>
          <ReactMarkdown
            components={{
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {props.comment}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
