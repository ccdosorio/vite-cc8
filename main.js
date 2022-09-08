import "./style.css";
import logoHeader from './wp-content/themes/galileo-theme/img/logo-header.png';
import iconGalileo from './wp-content/themes/galileo-theme/img/favicon.ico';
import logoFooter from './wp-content/themes/galileo-theme/img/logo-footer.png';

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
            <a class="navbar-right search-toggle show-search">
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
            <a rel="home">
              <img src="${logoHeader}" alt="image">
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
              <a class="nav-link">Institutos</a>
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
              <a class="nav-link">Escuelas</a>
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
              <a class="nav-link">Programas</a>
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
              <a class="nav-link">Centros</a>
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
        </div>
      </div>
    </div>
  </header>

  <div class="container-fl mx-0 px-0">
    <div id="historias-de-exito" class="carousel slide carousel-op carousel-fade" data-ride="carousel" data-interval="5000">
      <div class="carousel-inner">
        <div class="carousel-item item active" interval="5000">
          <h1>aqui voy</h1>
        </div>
      </div>
    </div>
  
  </div>






  <footer class="footer full-color">
    <section id="bottom">
      <div class="section-inner">
        <div class="row mx-0">
          <div class="col-md-4 d-flex logo-foo">
						<img id="img-footer" alt="logo-footer" class="img-footer" src="${logoFooter}">
					</div>
          <div class="col-md-8 d-flex">
            <div class="container">
              <div class="row normal-sidebar">

                <div class="col-md-3  widget widget-nav-menu">
                  <div class=" widget-inner">
                    <h2 class="widget-title maincolor1 title_study_in_galileo">Estudiar en Galileo</h2>
                    <div class="menu-law-business-container">
                      <div class="menu-footer-study-in-galileo-container">
                        <ul id="menu-law-business" class="menu mfstudy_in_galileo">
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65456 nav-item acerca-de-galileo">
                            <a class="nav-link">Acerca de Galileo</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65457 nav-item preguntas-frecuentes">
                            <a class="nav-link">Preguntas Frecuentes</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65458 nav-item investigaciones">
                            <a class="nav-link">Investigaciones</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65459 nav-item eventos-proximos">
                            <a class="nav-link">Eventos Próximos</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65460 nav-item tesario-virtual">
                            <a class="nav-link">Tesario Virtual</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3  widget widget-nav-menu">
                  <div class=" widget-inner">
                    <h2 class="widget-title maincolor1 ftitle_shortcuts">Accesos Directos</h2>
                    <div class="menu-engineering-container">
                      <div class="menu-footer-shortcuts-container">
                        <ul id="menu-engineering" class="menu mfshortcuts">
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65448 nav-item ofertas-laborales">
                            <a class="nav-link">Ofertas Laborales</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65449 nav-item revista-galileo">
                            <a class="nav-link">Revista Galileo</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65450 nav-item medialab">
                            <a class="nav-link">MediaLab</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65451 nav-item noticias">
                            <a class="nav-link">Noticias</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-68438 nav-item calendario">
                            <a class="nav-link">Calendario</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-71989 nav-item trends-and-innovation">
                            <a class="nav-link">Trends and Innovation</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3  widget widget-nav-menu">
                  <div class="widget-inner">
                    <h2 class="widget-title maincolor1 ftitle_student">Estudiante</h2>
                    <div class="menu-higher-education-container">
                      <div class="menu-footer-student-container">
                        <ul id="menu-higher-education" class="menu mfstudent">
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65452 nav-item ges">
                            <a class="nav-link">GES</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65453 nav-item correo-galileo">
                            <a class="nav-link">Correo Galileo</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65454 nav-item pagar-mi-u">
                            <a class="nav-link">Pagar mi U</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-65455 nav-item edx">
                            <a class="nav-link">edX</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-105805 nav-item reglamento-ciclo-2022">
                            <a class="nav-link">Reglamento ciclo 2022</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3  widget widget-nav-menu">
                  <div class=" widget-inner">
                    <h2 class="widget-title maincolor1 ftitle_contact">CONTACTO</h2>
                      <div class="textwidget mfcontact">
                        <div class="textwidget mfcontact">
                          <p>E-mail: <a class="mail-footer">info@galileo.edu</a></p>
                          <p>PBX: <a>+(502) 2423-8000 </a></p>
                          <p>Dirección: <a>Universidad Galileo 7a. Avenida, calle Dr. Eduardo Suger Cofiño, Zona 10</a>
                          </p>
                          <p><a>Escríbenos por WhatsApp</a></p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="bottom-nav">
        <div class="container">
            <div class="widget widget-text">
                <div class="row">
                    <nav class="col-md-12 footer-social">
                        <ul class="social-list">
                            <li>
                            <li><a class="btn btn-default social-icon"><i class="fab fa-facebook"></i></a></li>
                            <li><a class="btn btn-default social-icon"><i class="fab fa-twitter"></i></a></li>
                            <li><a class="btn btn-default social-icon"><i class="fab fa-instagram"></i></a></li>
                            <li><a class="btn btn-default social-icon"><i class="fab fa-youtube"></i></a></li>
                            <li><a class="btn btn-default social-icon"><i class="fab fa-linkedin"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="row footer-content">
                <div class="copyright col-12 text-center title_copyright">
                    Universidad Galileo todos los derechos reservados Guatemala C.A. © 2022 </div>
            </div>
        </div>
    </div>


  </footer>

</div>
`;

const favIcon = document.getElementById('fav-icon-galileo');
favIcon.href = iconGalileo;