import { cva, VariantProps } from 'class-variance-authority';

const textStyles = cva([], {
    variants: {
        size: {
            heading: 'text-heading',
            paragraph: 'text-paragraph',
        },
        weight: {
            light: 'font-light',
            normal: 'font-medium',
            semibold: 'font-semibold',
        },
    },
});

type TextStyleProps = VariantProps<typeof textStyles>;

export interface TextProps extends Omit<TextStyleProps, 'size' | 'weight'> {
    variant: `${NonNullable<TextStyleProps['size']>}/${NonNullable<
        TextStyleProps['weight']
    >}`;
    href?: string;
    primary?: boolean;
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ variant, primary, href, children }) => {
    const [size, weight] = variant.split('/') as [
        TextStyleProps['size'],
        TextStyleProps['weight']
    ];

    console.log(variant);

    if (href) return <a className={`${size} ${weight}`} href={href}></a>;

    return (
        <span
            className={`${textStyles({ size, weight })} ${
                primary ? 'text-primary' : 'text-slate-700'
            }`}
        >
            {children}
        </span>
    );
};

export default Text;
