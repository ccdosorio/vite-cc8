import "./style.css";
import './wp-content/plugins/getwid/assets/js/frontend.blocks.js';
import './wp-content/themes/galileo-theme/js/jQuery.verticalCarousel.js';
import './wp-content/themes/galileo-theme/js/owl.carousel.js';

document.querySelector("#header-inner").innerHTML = `
<div id="logo" class="logo">
<a rel="home">
    <img src="./wp-content/themes/galileo-theme/img/logo-header.webp" alt="image">
</a>
</div>
<div class="nav-wrap">
<nav id="mainnav" class="mainnav">
    <ul class="menu">
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65551 nav-item acerca-de">
            <a class="nav-link">Acerca de<span
                    class="menu-description"> Universidad Galileo</span></a>
        </li>
        <li
            class="menu-full menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65552 nav-item unidades">
            <a class="nav-link">UNIDADES<span
                    class="menu-description"> Académicas</span></a>
            <ul / class="submenu" />
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65553 nav-item facultades">
            <a class="nav-link">Facultades</a>
            <ul / class="submenu" />
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65554 nav-item ingenieria-de-sistemas-informatica-y-ciencias-de-la-computacion">
            <a class="nav-link">Ingeniería de Sistemas, Informática y
                Ciencias de la Computación</a>
        </li>
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65555 nav-item ciencia-tecnologia-e-industria">
            <a class="nav-link">Ciencia, Tecnología e Industria</a>
        </li>
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65556 nav-item educacion">
            <a class="nav-link">Educación</a>
        </li>
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65557 nav-item ciencias-de-la-comunicacion">
            <a class="nav-link">Ciencias de la Comunicación</a>
        </li>
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65558 nav-item ciencia-y-tecnologia-del-deporte">
            <a class="nav-link">Ciencia y Tecnología del Deporte</a>
        </li>
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65559 nav-item biologia-quimica-y-farmacia">
            <a class="nav-link">Biología, Química y Farmacia</a>
        </li>
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65560 nav-item ingenieria-de-la-construccion">
            <a class="nav-link">Ingeniería de la Construcción</a>
        </li>
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65561 nav-item ciencias-de-la-salud">
            <a class="nav-link">Ciencias de la Salud</a>
        </li>
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65562 nav-item administracion">
            <a class="nav-link">Administración</a>
        </li>
        <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65563 nav-item ingenieria-quimica">
            <a class="nav-link">Ingeniería
                Química</a>
        </li>
    </ul>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65564 nav-item institutos">
        <a  class="nav-link">Institutos</a>
        <ul / class="submenu" />
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65565 nav-item educacion-abierta-idea">
        <a class="nav-link">Educación Abierta (IDEA)</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65566 nav-item von-neumann">
        <a class="nav-link">Von Neumann</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65567 nav-item recursos-energeticos">
        <a class="nav-link">Recursos Energéticos</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65568 nav-item estudios-en-seguridad">
        <a class="nav-link">Estudios en Seguridad</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65569 nav-item investigacion-de-ciencias-de-la-tierra-y-la-astronomia">
        <a class="nav-link">Investigación de Ciencias de la Tierra y la
            Astronomía</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65570 nav-item ciencias-de-la-familia">
        <a class="nav-link">Ciencias de la Familia</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65571 nav-item desarrollo-sostenible">
        <a class="nav-link">Desarrollo Sostenible</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65572 nav-item investigacion-de-operaciones">
        <a class="nav-link">Investigación de Operaciones</a>
    </li>
    </ul>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65573 nav-item escuelas">
        <a  class="nav-link">Escuelas</a>
        <ul / class="submenu" />
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65574 nav-item educacion-continua">
        <a class="nav-link">Educación Continua</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65575 nav-item tecnica">
        <a class="nav-link">Técnica</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65576 nav-item superior-de-arte">
        <a class="nav-link">Superior de Arte</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65577 nav-item superior-de-diplomacia-y-relaciones-internacionales">
        <a class="nav-link">Superior de Diplomacia y Relaciones
            Internacionales</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65578 nav-item superior-de-imagen-publica">
        <a class="nav-link">Superior de Imagen Pública</a>
    </li>
    </ul>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65579 nav-item programas">
        <a  class="nav-link">Programas</a>
        <ul / class="submenu" />
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65580 nav-item desarrollo-humano">
        <a class="nav-link">Desarrollo Humano</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65581 nav-item actualizacion-para-adultos">
        <a class="nav-link">Actualización para Adultos</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65582 nav-item ejercito-de-guatemala">
        <a class="nav-link">Ejército de Guatemala</a>
    </li>
    </ul>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65583 nav-item centros">
        <a  class="nav-link">Centros</a>
        <ul / class="submenu" />
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65584 nav-item estudios-contemporaneos">
        <a class="nav-link">Estudios Contemporáneos</a>
    </li>
    </ul>
    </li>
    </ul>
    </li>
    <li
        class="menu-pile menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65585 nav-item carreras">
        <a class="nav-link">CARRERAS<span
                class="menu-description"> ¿Qué te interesa?</span></a>
        <ul / class="submenu" />
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65586 nav-item doctorado">
        <a class="nav-link">Doctorado</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65587 nav-item maestria">
        <a class="nav-link">Maestría</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65588 nav-item postgrado">
        <a class="nav-link">Postgrado</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65589 nav-item ingenieria">
        <a class="nav-link">Ingeniería</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65590 nav-item licenciatura">
        <a class="nav-link">Licenciatura</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65591 nav-item profesorado">
        <a class="nav-link">Profesorado</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65592 nav-item tecnico">
        <a class="nav-link">Técnico</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65593 nav-item diplomado">
        <a class="nav-link">Diplomado</a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65594 nav-item certificacion">
        <a class="nav-link">Certificación</a>
    </li>
    </ul>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65595 nav-item admisiones">
        <a class="nav-link">ADMISIONES<span class="menu-description">
                Proceso</span></a>
    </li>
    <li
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65596 nav-item investigaciOn">
        <a class="nav-link">INVESTIGACIÓN<span
                class="menu-description"> Científica</span></a>
    </li>
    </ul>
</nav>
</div>

`;