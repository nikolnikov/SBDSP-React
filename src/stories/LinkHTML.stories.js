import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';

export default {
    title: 'Components/Link/HTML',
    parameters: {
        layout: 'centered',
        controls: {
            disable: true
        },
        actions: {
            disable: true
        },
        docs: {
            page: () => (
                <>
                    <Unstyled>
                        <h3 className="title">Link</h3>
                    </Unstyled>
                    <Canvas
                        of={Link}
                        source={{
                            code: `
<a class="ds-link" href="#">Link text</a>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Link destructive</h3>
                    </Unstyled>
                    <Canvas
                        of={LinkDestructive}
                        source={{
                            code: `
<a class="ds-link --destructive" href="#">Link text</a>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Link inverse</h3>
                    </Unstyled>
                    <div className="dark-bg">
                        <Canvas
                            of={LinkInverse}
                            source={{
                                code: `
<a class="ds-link --inverse" href="#">Link text</a>
`
                            }}
                        />
                    </div>

                    <Unstyled>
                        <h3 className="title">Link with icon</h3>
                    </Unstyled>
                    <Canvas
                        of={LinkIcon}
                        source={{
                            code: `
<a class="ds-link --icons" href="#">
    <span class="ds-icon--info" aria-label="ds-icon--info"></span>
    <span>Link text</span>
</a>
`
                        }}
                    />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

export const Link = () => {
    return (
        <a className="ds-link" href="#">
            Link text
        </a>
    );
};

export const LinkDestructive = () => {
    return (
        <a className="ds-link --destructive" href="#">
            Link text
        </a>
    );
};

export const LinkInverse = () => {
    return (
        <a className="ds-link --inverse" href="#">
            Link text
        </a>
    );
};

export const LinkIcon = () => {
    return (
        <a className="ds-link --icons" href="#">
            <span className="ds-icon--info" aria-label="ds-icon--info"></span>
            <span>Link text</span>
        </a>
    );
};
