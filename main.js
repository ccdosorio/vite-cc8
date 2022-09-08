import "./style.css";
import logoHeader from './wp-content/themes/galileo-theme/img/logo-header.png';
import iconGalileo from './wp-content/themes/galileo-theme/img/favicon.ico';

document.querySelector("#app").innerHTML = `
<div class="boxed">

  <div class="header-inner-pages">
    <div class="top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar menu-top">
              <ul id="secundary_menu" class="menu">
                <li
                  class="menu-ges menu-item menu-item-type-custom menu-item-object-custom menu-item-65443 nav-item ges">
                  <a title="GES" class="nav-link">GES</a>
                </li>
                <li
                  class="menu-gmail menu-item menu-item-type-custom menu-item-object-custom menu-item-65444 nav-item correo">
                  <a title="CORREO" class="nav-link">CORREO</a>
                </li>
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65445 nav-item pagar-mi-u">
                  <a title="PAGAR MI U" class="nav-link">PAGAR MI U</a>
                </li>
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-76786 nav-item asignarme-en-lInea">
                  <a title="ASIGNARME EN LÍNEA" class="nav-link">ASIGNARME EN LÍNEA</a>
                </li>  
              </ul>
            </nav>
            <a class="navbar-right search-toggle show-search" href="#">
              <i class="fa fa-search"></i>
            </a>
            <div class="navbar-right topnav-sidebar">
              <ul class="textwidget">
                <li><a><i class="fab fa-instagram"></i></a></li>
                <li><a><i class="fab fa-youtube"></i></a></li>
                <li><a><i class="fab fa-facebook"></i></a></li>
                <li><a><i class="fab fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <header id="header" class="header">
    <div class="header-wrap">
      <div class="container">
        <div class="header-wrap clearfix">
          <div id="logo" class="logo">
            <a href="/" rel="home">
              <img src="${logoHeader}" alt="image">
            </a>
          </div>
          <div class="nav-wrap">
            <nav id="mainnav" class="mainnav">
            <ul class="menu">
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65551 nav-item acerca-de">
                <a href="/acerca-de-galileo/" class="nav-link">Acerca de<span
                    class="menu-description"> Universidad Galileo</span></a>
              </li>
              <li
                class="menu-full menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65552 nav-item unidades">
                <a href="/facultades-escuelas-e-institutos/" class="nav-link">UNIDADES<span
                    class="menu-description"> Académicas</span></a>
                <ul / class="submenu" />
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65553 nav-item facultades">
                <a href="#" class="nav-link">Facultades</a>
                <ul / class="submenu" />
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65554 nav-item ingenieria-de-sistemas-informatica-y-ciencias-de-la-computacion">
                <a href="/fisicc/" class="nav-link">Ingeniería de Sistemas, Informática y
                  Ciencias de la Computación</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65555 nav-item ciencia-tecnologia-e-industria">
                <a href="/facti/" class="nav-link">Ciencia, Tecnología e Industria</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65556 nav-item educacion">
                <a href="/faced/" class="nav-link">Educación</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65557 nav-item ciencias-de-la-comunicacion">
                <a href="/facom/" class="nav-link">Ciencias de la Comunicación</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65558 nav-item ciencia-y-tecnologia-del-deporte">
                <a href="/factede/" class="nav-link">Ciencia y Tecnología del Deporte</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65559 nav-item biologia-quimica-y-farmacia">
                <a href="/fabiq/" class="nav-link">Biología, Química y Farmacia</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65560 nav-item ingenieria-de-la-construccion">
                <a href="/ficon/" class="nav-link">Ingeniería de la Construcción</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65561 nav-item ciencias-de-la-salud">
                <a href="/facisa/" class="nav-link">Ciencias de la Salud</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65562 nav-item administracion">
                <a href="/facultad-de-administracion/" class="nav-link">Administración</a>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65563 nav-item ingenieria-quimica">
                <a href="/facultad-de-ingenieria-quimica/" class="nav-link">Ingeniería
                  Química</a>
              </li>
            </ul>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65564 nav-item institutos">
              <a href="#" class="nav-link">Institutos</a>
              <ul / class="submenu" />
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65565 nav-item educacion-abierta-idea">
              <a href="/idea/" class="nav-link">Educación Abierta (IDEA)</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65566 nav-item von-neumann">
              <a href="/ivn/" class="nav-link">Von Neumann</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65567 nav-item recursos-energeticos">
              <a href="/ire/" class="nav-link">Recursos Energéticos</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65568 nav-item estudios-en-seguridad">
              <a href="/ies/" class="nav-link">Estudios en Seguridad</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65569 nav-item investigacion-de-ciencias-de-la-tierra-y-la-astronomia">
              <a href="/iicta/" class="nav-link">Investigación de Ciencias de la Tierra y la
                Astronomía</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65570 nav-item ciencias-de-la-familia">
              <a href="/icf/" class="nav-link">Ciencias de la Familia</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65571 nav-item desarrollo-sostenible">
              <a href="/ids/" class="nav-link">Desarrollo Sostenible</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65572 nav-item investigacion-de-operaciones">
              <a href="/iio/" class="nav-link">Investigación de Operaciones</a>
            </li>
            </ul>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65573 nav-item escuelas">
              <a href="#" class="nav-link">Escuelas</a>
              <ul / class="submenu" />
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65574 nav-item educacion-continua">
              <a href="/esec/" class="nav-link">Educación Continua</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65575 nav-item tecnica">
              <a href="/estec/" class="nav-link">Técnica</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65576 nav-item superior-de-arte">
              <a href="/esa/" class="nav-link">Superior de Arte</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65577 nav-item superior-de-diplomacia-y-relaciones-internacionales">
              <a href="/esdri/" class="nav-link">Superior de Diplomacia y Relaciones
                Internacionales</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65578 nav-item superior-de-imagen-publica">
              <a href="/esip/" class="nav-link">Superior de Imagen Pública</a>
            </li>
            </ul>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65579 nav-item programas">
              <a href="#" class="nav-link">Programas</a>
              <ul / class="submenu" />
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65580 nav-item desarrollo-humano">
              <a href="/pdh/" class="nav-link">Desarrollo Humano</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65581 nav-item actualizacion-para-adultos">
              <a href="/apa/" class="nav-link">Actualización para Adultos</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65582 nav-item ejercito-de-guatemala">
              <a href="/peg/" class="nav-link">Ejército de Guatemala</a>
            </li>
            </ul>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65583 nav-item centros">
              <a href="#" class="nav-link">Centros</a>
              <ul / class="submenu" />
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65584 nav-item estudios-contemporaneos">
              <a href="/cec/" class="nav-link">Estudios Contemporáneos</a>
            </li>
            </ul>
            </li>
            </ul>
            </li>
            <li
              class="menu-pile menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65585 nav-item carreras">
              <a href="/busqueda-avanzada/" class="nav-link">CARRERAS<span
                  class="menu-description"> ¿Qué te interesa?</span></a>
              <ul / class="submenu" />
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65586 nav-item doctorado">
              <a href="/busqueda-avanzada/?grado=doctorado-ug" class="nav-link">Doctorado</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65587 nav-item maestria">
              <a href="/busqueda-avanzada/?grado=maestria-ug" class="nav-link">Maestría</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65588 nav-item postgrado">
              <a href="/busqueda-avanzada/?grado=postgrado-ug" class="nav-link">Postgrado</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65589 nav-item ingenieria">
              <a href="/busqueda-avanzada/?grado=ingenieria-ug" class="nav-link">Ingeniería</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65590 nav-item licenciatura">
              <a href="/busqueda-avanzada/?grado=licenciatura-ug"
                class="nav-link">Licenciatura</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65591 nav-item profesorado">
              <a href="/busqueda-avanzada/?grado=profesorado-ug" class="nav-link">Profesorado</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65592 nav-item tecnico">
              <a href="/busqueda-avanzada/?grado=tecnico-ug" class="nav-link">Técnico</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65593 nav-item diplomado">
              <a href="/busqueda-avanzada/?grado=diplomado-ug" class="nav-link">Diplomado</a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65594 nav-item certificacion">
              <a href="/busqueda-avanzada/?grado=certificacion-ug"
                class="nav-link">Certificación</a>
            </li>
            </ul>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65595 nav-item admisiones">
              <a href="/admisiones/" class="nav-link">ADMISIONES<span class="menu-description">
                  Proceso</span></a>
            </li>
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65596 nav-item investigaciOn">
              <a href="/investigacion/" class="nav-link">INVESTIGACIÓN<span
                  class="menu-description"> Científica</span></a>
            </li>
            </ul>
          </nav>
          </div>
        </div>
      </div>
    </div>
  </header>



</div>
`;

const favIcon = document.getElementById('fav-icon-galileo');
favIcon.href = iconGalileo;