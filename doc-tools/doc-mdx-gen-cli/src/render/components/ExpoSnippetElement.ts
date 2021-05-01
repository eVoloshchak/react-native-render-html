import MDXDocument from './MDXDocument';
import NodeWithChildren from './NodeWithChildren';

export type ExpoSnippetElementProps = {
  snippet: string;
  title: string;
  caption?: string;
};

export default class ExpoSnippetElement extends NodeWithChildren {
  props: ExpoSnippetElementProps;
  constructor(props: ExpoSnippetElementProps, root: MDXDocument) {
    super();
    this.props = props;
    root.registerImport('ExpoSnippet');
  }

  toMdx(): string {
    const tagName = 'ExpoSnippet';
    const { snippet, ...inlineProps } = this.props;
    const identifiers = [tagName, ...this.getInlineProps(inlineProps)];
    return `\n<${identifiers.join(' ')} snippet="${encodeURIComponent(
      snippet
    )}" />\n`;
  }
}
