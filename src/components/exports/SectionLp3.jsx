import styles from '../../styles/modules/sectionLp3.module.css';

import ImgSection from '../../assets/images/img-section-3-lp-1.webp';

import { requisitos } from '../utils/requisitos';

import useAnimationScroll from '../../hooks/UseAnimationScroll';

export const SectionLp3 = () => {
    const objRef = useAnimationScroll('slide-in');

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">Requisitos para tramitar tu Mejoravit</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div ref={objRef} className={`${styles.requisitosContainer} animacion-izq`}>
                    <ul className="light-text">
                        {requisitos.map(({ id, text }) => (
                            <li key={id}>{text}</li>
                        ))}
                    </ul>
                </div>

                <img
                    className="animacion-der"
                    ref={objRef}
                    src={ImgSection}
                    alt="Tres Documentos apilados con un signo de check positivo"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </section>
    );
};
