import React from 'react';
import { QDSModal } from './Modal';

export default {
    title: 'Components/Modal',
    component: QDSModal,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

export const BasicModal = {
    args: {
        buttonHandler: () => {},
        buttonLabel: 'Button',
        children:
            'Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.',
        title: 'Modal title'
    },
    argTypes: {
        buttonHandler: { table: { disable: true } },
        ghostButtonHandler: { table: { disable: true } },
        secondaryButtonHandler: { table: { disable: true } },
        modalClose: { table: { disable: true } },
        opened: { table: { disable: true } }
    }
};

export const InformativeModal = {
    args: {
        ...BasicModal.args,
        type: 'informative'
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};

export const ErrorModal = {
    args: {
        ...BasicModal.args,
        type: 'error'
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};

export const AlertModal = {
    args: {
        ...BasicModal.args,
        type: 'alert'
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};

export const ModalWithPrimaryAndSecondaryButtons = {
    args: {
        ...BasicModal.args,
        buttonHandler: () => {},
        buttonLabel: 'Button',
        secondaryButtonHandler: () => {},
        secondaryButtonLabel: 'Button'
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};

export const ModalWithPrimaryAndGhostButtons = {
    args: {
        ...BasicModal.args,
        buttonHandler: () => {},
        buttonLabel: 'Button',
        ghostButtonHandler: () => {},
        ghostButtonLabel: 'Button'
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};

export const ScrollableModal = {
    args: {
        ...BasicModal.args,
        children: (
            <>
                Itaque illos planos, quos mathematicos vocant, plane consulere
                non desistebam, quod quasi nullum eis esset sacrificium, et
                nullae preces ad aliquem spiritum ob divinationem dirigerentur.
                quod tamen Christiana et vera pietas consequenter repellit et
                damnat. bonum est enim confiteri tibi, domine, et dicere:
                Miserere mei, cura animam meam, quoniam peccavi tibi; neque ad
                licentiam peccandi abuti indulgentia tua, sed meminisse
                dominicae vocis: Ecce sanus factus es; iam noli peccare, ne quid
                tibi deterius contingat. quam totam illi salubritatem
                interficere conantur, cum dicunt: de caelo tibi est inevitabilis
                causa peccandi et Venus hoc fecit aut Saturnus aut Mars,
                scilicet ut homo sine culpa sit, caro et sanguis et super a
                putredo, culpandus sit autem caeli ac siderum creator et
                ordinator. et quis est hic nisi deus noster, suavitas et origo
                iustitiae, qui reddes unicuique secundum opera eius et cor
                contritum et humiliatum non spernis? Erat eo tempore vir sagax,
                medicinae artis peritissimus atque in ea nobilissimus, qui
                proconsul manu sua coronam illam agonisticam inposuerat non sano
                capiti meo, sed non ut medicus. nam illius morbi tu sanator, qui
                resistis superbis, humilibus autem das gratiam. numquid tamen
                etiam per illum senem defuisti mihi, aut destitisti mederi
                animae meae?
                <br />
                <br />
                In illis annis, quo primum tempore in municipio, quo natus sum,
                docere coeperam, conparaveram amicum societate studiorum nimis
                carum, coaevum mihi et conflorentem flore adulescentiae. mecum
                puer creverat et pariter in scholam ieramus pariterque
                luseramus. sed nondum erat sic amicus, quamquam ne tum quidem
                sic, uti est vera amicitia, quia non est vera, nisi cum eam tu
                agglutinas inter haerentes sibi caritate diffusa in cordibus
                nostris per spiritum sanctum, qui datus est nobis. sed tamen
                dulcis erat nobis, cocta fervore parilium studiorum. nam et a
                fide vera, quam non germanitus et penitus adulescens tenebat,
                deflexeram eum in superstitiosas fabellas et perniciosas,
                propter quas me plangebat mater. mecum iam errabat in animo ille
                homo, et non poterat anima mea sine illo. et ecce tu inminens
                dorso fugitivorum tuorum, deus ultionum et fons misericordiarum
                simul, qui convertis nos ad te miris modis, ecce abstulisti
                hominem de hac vita, cum vix explevisset annum in amicitia mea,
                suavi mihi super omnes suavitates illius vitae meae. Quis laudes
                tuas enumerat unus in se uno, quas expertus est? quid tunc
                fecisti, deus meus, et quam investigabilis abyssus iudiciorum
                tuorum? cum enim laboraret ille febribus, iacuit diu sine sensu
                in sudore laetali, et cum desperaretur, baptizatus est nesciens,
                me non curante, et praesumente id retinere potius animam eius
                quod a me acceperat, non quod in nescientis corpore fiebat.
                longe autem aliter erat. nam recreatus est et salvus factus,
                statimque, ut primo cum eo loqui potui -- potui autem mox, ut
                ille potuit, quando non discedebam et nimis pendebamus ex
                invicem -- temptavi apud illum inridere, tamquam et illo inrisuo
                mecum baptismum, quem acceperat mente atque sensu absentissimus.
                sed tamen iam se accepisse didicerat. at ille ita me exhorruit
                ut inimicum, admonuitque mirabili et repentina libertate, ut, si
                amicus esse vellem, talia sibi dicere desinerem. ego autem
                stupefactus atque turbatus, distuli omnes motus meos, ut
                convalesceret prius, essetque idoneus viribus valetudinis, cum
                quo agere possem quod vellem. sed ille abreptus dementiae meae,
                ut apud te servaretur consolationi meae, post paucos dies me
                absente repetitur febribus et defungitur.
            </>
        )
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};
