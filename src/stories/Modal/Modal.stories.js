import React, { useState } from 'react';
import { Source, Story, Subtitle, Unstyled } from '@storybook/blocks';
import { Modal } from './Modal';
import { ModalData } from './Modal.data';

export const StoryDocs = () => {
    const [activeTabs, setActiveTabs] = useState({});

    const handleTabClick = (itemKey, tabKey) => {
        setActiveTabs(prevState => ({
            ...prevState,
            [itemKey]: tabKey
        }));
    };

    return (
        <>
            {Object.keys(ModalData).map(
                key =>
                    ModalData[key] && (
                        <div className="ds-story" key={key}>
                            <Unstyled className="ds-story__header">
                                <h3>{ModalData[key].title}</h3>
                            </Unstyled>

                            <div className="ds-story__canvas">
                                <div className="ds-story__preview">
                                    {ModalData[key].template && (
                                        <Story of={ModalData[key].template} />
                                    )}
                                </div>

                                <div className="ds-story__source">
                                    <div
                                        className={
                                            `ds-story__tabs` +
                                            (activeTabs[key]
                                                ? ' tabs-shown'
                                                : '')
                                        }
                                    >
                                        {Object.keys(ModalData).map(
                                            tabKey =>
                                                ModalData[tabKey] && (
                                                    <button
                                                        key={tabKey}
                                                        className={`ds-story__tab ${activeTabs[key] === tabKey ? 'active' : ''}`}
                                                        onClick={() =>
                                                            handleTabClick(
                                                                key,
                                                                tabKey
                                                            )
                                                        }
                                                    >
                                                        {tabKey}
                                                    </button>
                                                )
                                        )}
                                    </div>

                                    {(activeTabs[key] === 'Angular' ||
                                        activeTabs[key] === 'TS') && (
                                        <div className="ds-story__subtabs">
                                            <button
                                                className={`ds-story__tab ${activeTabs[key] === 'Angular' ? 'active' : ''}`}
                                                onClick={() =>
                                                    handleTabClick(
                                                        key,
                                                        'Angular'
                                                    )
                                                }
                                            >
                                                component.html
                                            </button>

                                            <button
                                                className={`ds-story__tab ${activeTabs[key] === 'TS' ? 'active' : ''}`}
                                                onClick={() =>
                                                    handleTabClick(key, 'TS')
                                                }
                                            >
                                                component.ts
                                            </button>
                                        </div>
                                    )}

                                    {activeTabs[key] === 'React' &&
                                        ModalData[key].reactCode && (
                                            <Source
                                                code={
                                                    ModalData[key].reactCode[0]
                                                }
                                            />
                                        )}
                                    {activeTabs[key] === 'Angular' &&
                                        ModalData[key].angularCode && (
                                            <Source
                                                code={
                                                    ModalData[key]
                                                        .angularCode[0]
                                                }
                                            />
                                        )}
                                    {activeTabs[key] === 'TS' &&
                                        ModalData[key].tsCode && (
                                            <Source
                                                code={ModalData[key].tsCode[0]}
                                            />
                                        )}
                                    {activeTabs[key] === 'HTML' &&
                                        ModalData[key].htmlCode && (
                                            <Source
                                                code={
                                                    ModalData[key].htmlCode[0]
                                                }
                                            />
                                        )}
                                </div>
                            </div>
                        </div>
                    )
            )}

            <Subtitle>
                <div className="props-card">
                    <h4>React props</h4>
                    <ul className="ds-list">
                        <li>backdropClickable: propTypes.bool,</li>
                        <li>buttonHandler: propTypes.func,</li>
                        <li>buttonLabel: propTypes.string,</li>
                        <li>children: propTypes.node.isRequired,</li>
                        <li>ghostButtonHandler: propTypes.func,</li>
                        <li>ghostButtonLabel: propTypes.string,</li>
                        <li>hideX: propTypes.bool,</li>
                        <li>linkLabel: propTypes.string,</li>
                        <li>modalClose: propTypes.func,</li>
                        <li>opened: propTypes.bool,</li>
                        <li>secondaryButtonHandler: propTypes.func,</li>
                        <li>secondaryButtonLabel: propTypes.string,</li>
                        <li>
                            status: propTypes.oneOf(['alert', 'error',
                            'informative']),
                        </li>
                        <li>title: propTypes.string</li>
                    </ul>
                </div>
            </Subtitle>
        </>
    );
};

export default {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
        controls: {
            disable: true
        },
        actions: {
            disable: true
        },
        docs: {
            page: StoryDocs
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Modal';
Primary.args = {
    buttonHandler: () => console.log('Primary button clicked'),
    buttonLabel: 'Button',
    children:
        'Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.',
    title: 'Modal title'
};

export const PrimaryStatus = Template.bind({});
PrimaryStatus.storyName = 'Modal with status icon';
PrimaryStatus.args = {
    ...Primary.args,
    status: 'alert'
};

export const PrimarySecondaryButton = Template.bind({});
PrimarySecondaryButton.storyName = 'Modal with secondary button';
PrimarySecondaryButton.args = {
    ...Primary.args,
    secondaryButtonHandler: () => console.log('Secondary button clicked'),
    secondaryButtonLabel: 'Button'
};

export const PrimaryGhostButton = Template.bind({});
PrimaryGhostButton.storyName = 'Modal with ghost button';
PrimaryGhostButton.args = {
    ...Primary.args,
    ghostButtonHandler: () => console.log('Ghost button clicked'),
    ghostButtonLabel: 'Button'
};

export const PrimaryAllButtons = Template.bind({});
PrimaryAllButtons.storyName = 'Modal with all buttons';
PrimaryAllButtons.args = {
    ...Primary.args,
    ghostButtonHandler: () => console.log('Ghost button clicked'),
    ghostButtonLabel: 'Button',
    secondaryButtonHandler: () => console.log('Secondary button clicked'),
    secondaryButtonLabel: 'Button'
};

export const PrimaryScrollable = Template.bind({});
PrimaryScrollable.storyName = 'Modal with scrollable content';
PrimaryScrollable.args = {
    ...Primary.args,
    children:
        'Itaque illos planos, quos mathematicos vocant, plane consulere non desistebam, quod quasi nullum eis esset sacrificium, et nullae preces ad aliquem spiritum ob divinationem dirigerentur. quod tamen Christiana et vera pietas consequenter repellit et damnat. bonum est enim confiteri tibi, domine, et dicere: Miserere mei, cura animam meam, quoniam peccavi tibi; neque ad licentiam peccandi abuti indulgentia tua, sed meminisse dominicae vocis: Ecce sanus factus es; iam noli peccare, ne quid tibi deterius contingat. quam totam illi salubritatem interficere conantur, cum dicunt: de caelo tibi est inevitabilis causa peccandi et Venus hoc fecit aut Saturnus aut Mars, scilicet ut homo sine culpa sit, caro et sanguis et super a putredo, culpandus sit autem caeli ac siderum creator et ordinator. et quis est hic nisi deus noster, suavitas et origo iustitiae, qui reddes unicuique secundum opera eius et cor contritum et humiliatum non spernis? Erat eo tempore vir sagax, medicinae artis peritissimus atque in ea nobilissimus, qui proconsul manu sua coronam illam agonisticam inposuerat non sano capiti meo, sed non ut medicus. nam illius morbi tu sanator, qui resistis superbis, humilibus autem das gratiam. numquid tamen etiam per illum senem defuisti mihi, aut destitisti mederi animae meae? In illis annis, quo primum tempore in municipio, quo natus sum, docere coeperam, conparaveram amicum societate studiorum nimis carum, coaevum mihi et conflorentem flore adulescentiae. mecum puer creverat et pariter in scholam ieramus pariterque luseramus. sed nondum erat sic amicus, quamquam ne tum quidem sic, uti est vera amicitia, quia non est vera, nisi cum eam tu agglutinas inter haerentes sibi caritate diffusa in cordibus nostris per spiritum sanctum, qui datus est nobis. sed tamen dulcis erat nobis, cocta fervore parilium studiorum. nam et a fide vera, quam non germanitus et penitus adulescens tenebat, deflexeram eum in superstitiosas fabellas et perniciosas, propter quas me plangebat mater. mecum iam errabat in animo ille homo, et non poterat anima mea sine illo. et ecce tu inminens dorso fugitivorum tuorum, deus ultionum et fons misericordiarum simul, qui convertis nos ad te miris modis, ecce abstulisti hominem de hac vita, cum vix explevisset annum in amicitia mea, suavi mihi super omnes suavitates illius vitae meae.'
};
