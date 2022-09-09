import "./style.css";
import logoHeader from './wp-content/themes/galileo-theme/img/logo-header.webp';
import iconGalileo from './wp-content/themes/galileo-theme/img/favicon.ico';
import logoFooter from './wp-content/themes/galileo-theme/img/logo-footer.webp';
import imgExterno2 from './wp-content/uploads/2022/06/Externo-2.webp';
import imgMovil11 from './wp-content/uploads/2022/06/Movil-1-1.webp'
import imgExterno825 from './wp-content/uploads/2022/06/Externo-825x510.webp';
import imgExterno from './wp-content/uploads/2022/06/Externo.webp';
import imgMovil1 from './wp-content/uploads/2022/06/Movil-1-1.webp';
import imgExpoGalileoBanner from './wp-content/uploads/2022/06/expo-galileo_Banner-HE-copy-3-1-825x510.webp';
import imgExpoGalileoBannerHe from './wp-content/uploads/2022/06/expo-galileo_Banner-HE-copy-3-1-825x510.webp';
import imgExpoGalileoBannerMovilScaled from './wp-content/uploads/2022/06/expo-galileo_Banner-móvil-copy-3-scaled.webp';
import imgExternoFinal from './wp-content/uploads/2022/06/Externo-FINAL-825x510.webp';
import imgExternoFinal2 from './wp-content/uploads/2022/06/Externo-FINAL.webp';
import imgArtboard1 from './wp-content/uploads/2022/06/Artboard-1.webp';
import imgBannerexterno2 from './wp-content/uploads/2022/05/Bannerexterno2-825x510.webp';
import imgBannerexterno22 from './wp-content/uploads/2022/05/Bannerexterno2.webp';
import imgBannerMovil1 from './wp-content/uploads/2022/05/bannermovil-1.webp';
import imgExterno22 from './wp-content/uploads/2022/06/Externo-2-825x510.webp';
import imgPor1 from './wp-content/uploads/2022/08/PORT-01-1-1-3.webp';
import imgPor2 from './wp-content/uploads/2022/08/PORT-01-1-1-2.webp';
import imgPor3 from './wp-content/uploads/2022/08/PORT-01-1-1-1.webp';
import imgPor4 from './wp-content/uploads/2022/08/PORT-01-1-1.webp';
import imgPort5 from './wp-content/uploads/2022/08/PORT-01-1-2.webp';
import imgPor6 from './wp-content/uploads/2022/07/PORT-01-1-3.webp';
import imgPor7 from './wp-content/uploads/2022/07/PORT-01-1-2.webp';
import imgPng2 from './wp-content/uploads/2022/06/PNG-2.webp';

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
            <div class="card-image" id="img-externo-2">
                <a class="link-caption-image"></a>
            </div>
            <div class="card-image card-image-mobile" id="img-movil1-1">
                <a class="link-caption-image"></a>
            </div>
            <div class="carousel-caption animated fadeInRight">
                <a class="align-left hidden-xs">
                    <h5 class="animated fadeIn fade">Estas carreras puedes estudiar en Universidad Galileo en 2023</h5>
                </a>
                <div class="cm-title">
                    <a class="visible-xs-block link-mobile">Carreras que puedes estudiar en U Galileo en 2022 </a>
                </div>
                <div></div>
                <p class="visible-md-block visible-lg-block animated fadeIn fade">Con un enfoque en la
                    excelencia, Universidad Galileo ofrece una diversidad de carreras de pregrado para que
                    estudies y te conviertas en un profesional en el tema que más te apasiona. Estas
                    carreras técnicas , ingenierías y licenciaturas abarcan áreas como tecnología, salud,
                    química, construcción, administración, deporte, bienestar, educación, farmacéutica y
                    comunicación. Te presentamos algunas [&hellip;]</p>
                <div class="btn-car-ug hidden-xs">
                    <div class="view-more-ug">
                        <a class="btn btn-left">Ver más </a>
                    </div>
                    <div class="next-ug">
                        <div class="next-ug-img" id="img-externo-825-510">
                        </div>
                        <div class="overlay-ug"></div>
                        <a class=" btn btn-right" href="#historias-de-exito" role="button" data-slide="next"
                            onclick="return false;">Siguiente</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item item" interval="5000">
            <div class="card-image" id="img-externo">
                <a class="link-caption-image"></a>
            </div>
            <div class="card-image card-image-mobile" id="img-movil-1">
                <a class="link-caption-image"></a>
            </div>
            <div class="carousel-caption animated fadeInRight ">
                <a class="align-left hidden-xs">
                    <h5 class="animated fadeIn fade">Conoce las Maestrías y Postgrados que puedes estudiar en Universidad Galileo en 2023</h5>
                </a>
                <div class="cm-title">
                    <a class="visible-xs-block link-mobile">Maestrías y Postgrados a estudiar en U Galileo en 2023 </a>
                </div>
                <div></div>
                <p class="visible-md-block visible-lg-block animated fadeIn fade">La formación personal y
                    profesional resulta una de las mejores inversiones que puedes hacer en tu vida, ya que
                    el retorno de inversión que ésta puede traerte con el paso de los años será notorio.
                    Estudiar una Maestría te motiva a ser más competitivo y asumir un rol de líder, te
                    diferencia en el mercado [&hellip;]</p>
                <div class="btn-car-ug hidden-xs">
                    <div class="view-more-ug">
                        <a class=" btn  btn-left">Ver más </a>
                    </div>
                    <div class="next-ug">
                        <div class="next-ug-img" id="img-expo-galileo-banner">
                        </div>
                        <div class="overlay-ug"></div>
                        <a class=" btn btn-right" href="#historias-de-exito" role="button" data-slide="next"
                            onclick="return false;">Siguiente</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item item " interval="5000">
            <div class="card-image" id="img-galileo-banner-he">
                <a class="link-caption-image"></a>
            </div>
            <div class="card-image card-image-mobile" id="img-banner-movil-scaled">
                <a class="link-caption-image"></a>
            </div>
            <div class="carousel-caption animated fadeInRight ">
                <a class="align-left hidden-xs">
                    <h5 class="animated fadeIn fade">Universidad Galileo presentó sus carreras a nivel de
                        pregrado en la Expo Galileo 2022</h5>
                </a>
                <div class="cm-title">
                    <a class="visible-xs-block link-mobile">
                        Universidad Galileo presentó sus carreras a nivel de pregrado en la Expo Galileo 2022 </a>
                </div>
                <div></div>
                <p class="visible-md-block visible-lg-block animated fadeIn fade">Interesados en estudiar
                    una ingeniería o licenciatura en Universidad Galileo accedieron de manera virtual a la
                    Expo Galileo 2022, en donde tuvieron la oportunidad de conectarse directamente con la
                    Facultad, Escuela, Instituto o Laboratorio responsable de cada carrera. Durante tres
                    días, Universidad Galileo invitó a interesados a ser parte de una experiencia virtual
                    sin precedentes, [&hellip;]</p>
                <div class="btn-car-ug hidden-xs">
                    <div class="view-more-ug">
                        <a class=" btn  btn-left">Ver más </a>
                    </div>
                    <div class="next-ug">
                        <div class="next-ug-img" id="img-externo-final">
                        </div>
                        <div class="overlay-ug"></div>
                        <a class=" btn btn-right" href="#historias-de-exito" role="button" data-slide="next"
                            onclick="return false;">Siguiente</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item item " interval="5000">
            <div class="card-image" id="img-externo-final-2">
                <a class="link-caption-image"></a>
            </div>
            <div class="card-image card-image-mobile" id="img-artboard-1">
                <a class="link-caption-image"></a>
            </div>
            <div class="carousel-caption animated fadeInRight ">
                <a class="align-left hidden-xs">
                    <h5 class="animated fadeIn fade">U Galileo destaca en congreso internacional de Virtual Educa acerca de aprendizaje STEAM</h5>
                </a>
                <div class="cm-title">
                    <a class="visible-xs-block link-mobile">U Galileo destaca en congreso acerca de aprendizaje STEAM </a>
                </div>
                <div></div>
                <p class="visible-md-block visible-lg-block animated fadeIn fade">Universidad Galileo
                    participó en el congreso web “Entorno de aprendizaje STEAM”, junto con otras
                    universidades e instituciones destacadas en el trabajo de la educación híbrida y online.
                    Virtual Educa, una organización que impulsa la innovación en educación con el objetivo
                    de favorecer la transformación social y el desarrollo sostenible, especialmente en
                    Latinoamérica y el Caribe, [&hellip;]</p>
                <div class="btn-car-ug hidden-xs">
                    <div class="view-more-ug">
                        <a class=" btn  btn-left">Ver más </a>
                    </div>
                    <div class="next-ug">
                        <div class="next-ug-img" id="img-banner-externo-2">
                        </div>
                        <div class="overlay-ug"></div>
                        <a class=" btn btn-right" href="#historias-de-exito" role="button" data-slide="next"
                            onclick="return false;">Siguiente</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item item" interval="5000">
            <div class="card-image" id="img-banner-externo-22">
                <a class="link-caption-image"></a>
            </div>
            <div class="card-image card-image-mobile" id="img-banner-movil-1">
                <a class="link-caption-image"></a>
            </div>
            <div class="carousel-caption animated fadeInRight">
                <a class="align-left hidden-xs">
                    <h5 class="animated fadeIn fade">Expertas compartirán sus experiencias en el simposio “Ingenieras cambiando el mundo”</h5>
                </a>
                <div class="cm-title">
                    <a class="visible-xs-block link-mobile">Simposio “Ingenieras cambiando el mundo” </a>
                </div>
                <div></div>
                <p class="visible-md-block visible-lg-block animated fadeIn fade">¿Eres mujer y te interesa
                    estudiar una carrera tecnológica? Conoce las historias de ingenieras que han dedicado
                    sus carreras profesionales a la ciencia y la tecnología, en este encuentro online
                    gratuito organizado por Universidad Galileo. Un grupo de mujeres conferencistas relatará
                    sus experiencias, conocimientos y recomendaciones acerca de ser profesionales de ciencia
                    y tecnología, en [&hellip;]</p>
                <div class="btn-car-ug hidden-xs">
                    <div class="view-more-ug">
                        <a class=" btn btn-left">Ver más</a>
                    </div>
                    <div class="next-ug">
                        <div class="next-ug-img" id="img-externo-22"></div>
                        <div class="overlay-ug"></div>
                        <a class=" btn btn-right" href="#historias-de-exito" role="button" data-slide="next"
                            onclick="return false;">Siguiente</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <ol class="carousel-indicators">
          <li data-target="#historias-de-exito" data-slide-to="0" class="active">
              <div class="overlay-ug"></div>
              <div id="ol-externo2"></div>
          </li>
          <li data-target="#historias-de-exito" data-slide-to="1" class="">
              <div class="overlay-ug"></div>
              <div id="ol-externo"></div>
          </li>
          <li data-target="#historias-de-exito" data-slide-to="2" class="">
              <div class="overlay-ug"></div>
              <div id="ol-banner-he"></div>
          </li>
          <li data-target="#historias-de-exito" data-slide-to="3" class="">
              <div class="overlay-ug"></div>
              <div id="ol-externo-final"></div>
          </li>
          <li data-target="#historias-de-exito" data-slide-to="4" class="">
              <div class="overlay-ug"></div>
              <div id="ol-banner-externo2"></div>
          </li>
      </ol>
    </div>

    <div class="visible-xs learn-more-cl">
      <div class="btn-ug-sh">
        <a>Explora nuestros programas <i class="fas fa-angle-right"></i></a>
      </div>
    </div>

    <div class="promotional-ribbon">
        <div class="container">
            <div class="title-ribbon">
                <p>Atrévete a cambiar el mundo</p>
                <strong>y haz posible lo imposible.</strong>
            </div>
            <div class="btn-ribbon">
                <a> Inicia tu proceso de admisión<i class="fas fa-chevron-right"></i></a>
            </div>
        </div>
    </div>

    <div class="topicality_section " id="topicality-section">
        <div class="flat-university container">
            <div class="box-university">
                <div class="">
                    <div class="">
                        <div class="flat-events topicality">
                            <div class="grid-item color-full grid-topicality-ug">
                                <div class="event-item">
                                    <div class="grid-item-content">
                                        <h1 class="title">Actualidad</h1>
                                        <p>Presiona el botón para ver todas las publicaciones.</p>
                                        <a class="flat-button flat-button-topicality">Conocer más <i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-inner w-100">
                                    <div class="event-item">
                                        <div class="event-thumbnail"><a><img src="${imgPor1}" alt="image"></a></div>
                                        <div class="event-overlay">
                                            <a class="overlay-top">
                                                <h4 class="topicality-title">Reconocimiento internacional para Gabriela Meléndez, Penn Nursing Renfield Foundation</h4>
                                            </a>
                                            <div class="overlay-footer">
                                                <p class="topicality-excerpt">Gabriela Meléndez Peláez, Directora de la Asociación Corazón del Agua, ...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-inner w-100">
                                    <div class="event-item">
                                        <div class="event-thumbnail">
                                            <a><img src="${imgPor2}" alt="image"></a></div>
                                        <div class="event-overlay">
                                            <a class="overlay-top">
                                                <h4 class="topicality-title">¿Cómo puedes aplicar procesos de innovación en PYMES?</h4>
                                            </a>
                                            <div class="overlay-footer">
                                                <p class="topicality-excerpt">Las Pymes son unidades económicas que representan a más del ...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-inner w-100">
                                    <div class="event-item">
                                        <div class="event-thumbnail">
                                            <a><img  src="${imgPor3}" alt="image"></a></div>
                                        <div class="event-overlay">
                                            <a class="overlay-top">
                                                <h4 class="topicality-title">10 Técnicos Universitarios de UGalileo para desarrollar tus capacidades profesionales</h4>
                                            </a>
                                            <div class="overlay-footer">
                                                <p class="topicality-excerpt">A través de estos técnicos podrás estar cada vez más ...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-inner w-100">
                                    <div class="event-item">
                                        <div class="event-thumbnail"><a><img src="${imgPor4}" alt="image"></a></div>
                                        <div class="event-overlay">
                                            <a class="overlay-top">
                                                <h4 class="topicality-title">Estudia en la Escuela Politécnica conoce sus carreras</h4>
                                            </a>
                                            <div class="overlay-footer">
                                                <p class="topicality-excerpt">La ciencia y el espíritu militar, la formación académica superior ...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-inner w-100">
                                    <div class="event-item">
                                        <div class="event-thumbnail"><a><img src="${imgPort5}" alt="image"></a></div>
                                        <div class="event-overlay">
                                            <a class="overlay-top">
                                                <h4 class="topicality-title">Estudia la Licenciatura en Tecnología y Administración de Recursos de la Escuela Politécnica</h4>
                                            </a>
                                            <div class="overlay-footer">
                                                <p class="topicality-excerpt">La Escuela Politécnica, dentro de su sistema educativo militar cuenta ...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-inner w-100">
                                    <div class="event-item">
                                        <div class="event-thumbnail"><a><img src="${imgPor6}" alt="image"></a></div>
                                        <div class="event-overlay"><a class="overlay-top">
                                                <h4 class="topicality-title">8 Licenciaturas que puedes estudiar en el 2023 en U Galileo</h4>
                                            </a>
                                            <div class="overlay-footer">
                                                <p class="topicality-excerpt">El 2023 se acerca, y aún no sabes qué carrera ...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-inner w-100">
                                    <div class="event-item">
                                        <div class="event-thumbnail"><a><img src="${imgPor7}" alt="image"></a></div>
                                        <div class="event-overlay"><a class="overlay-top">
                                                <h4 class="topicality-title">Análisis sobre primeras fotografías del Telescopio James Webb</h4>
                                            </a>
                                            <div class="overlay-footer">
                                                <p class="topicality-excerpt">Recientemente el Ing. Edgar Castro, Director del Instituto de Investigación ...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flat-button-topicality-mb">
                            <a>Conocer más <i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="wp-block-columns has-2-columns promotion-video">
        <div class="wp-block-column">
            <h2 class="title-montserrat-light wow fadeInLeft" id="mce_0">Inicia tu vida universitaria en Galileo
            </h2>
            <h2 class="title-montserrat-bold wow fadeInLeft" id="mce_0">Aplica a los exámenes de ubicación
                virtuales para el ciclo 2023</h2>
            <div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
            <h5>En el mes de junio damos inicio a la temporada de los exámenes de ubicación para el ciclo 2023.
                Conoce los requisitos que debes de seguir para aplicar de forma virtual.</h5>
            <div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
            <h5>¡Prepárate para dar el paso que te permitirá estudiar la carrera que te apasiona y desarrollar
                tus competencias al máximo! Reserva tu espacio para las próximas fechas. </h5>
            <div class="wp-block-button alignleft is-style-squared btn-more-info wow fadeInLeft"><a
                    class="wp-block-button__link has-background no-border-radius" style="background-color: #b89a59;"
                    rel="noopener noreferrer">¡Ingresa aquí!<i class="fa fa-angle-right"></i></a></div>
            <p>&nbsp;</p>
            <div class="wp-block-group">
                <div class="wp-block-group__inner-container"></div>
            </div>
            <div style="height:45px" aria-hidden="true" class="wp-block-spacer"></div>
        </div>
        <div class="wp-block-column">
            <div class="wp-block-cover aligncenter background-video-ug"
                style="background-image:url(${imgPng2})">
                <div class="wp-block-cover__inner-container">
                    <p class="has-text-align-center has-large-font-size"></p>
                </div>
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
                            <li></li>
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

document.getElementById('img-externo-2').style.backgroundImage = `url(${imgExterno2})`;
document.getElementById('img-movil1-1').style.backgroundImage = `url(${imgMovil11})`;
document.getElementById('img-externo-825-510').style.backgroundImage = `url(${imgExterno825})`;

document.getElementById('img-externo').style.backgroundImage = `url(${imgExterno})`;
document.getElementById('img-movil-1').style.backgroundImage = `url(${imgMovil1})`;
document.getElementById('img-expo-galileo-banner').style.backgroundImage = `url(${imgExpoGalileoBanner})`;

document.getElementById('img-galileo-banner-he').style.backgroundImage = `url(${imgExpoGalileoBannerHe})`;
document.getElementById('img-banner-movil-scaled').style.backgroundImage = `url(${imgExpoGalileoBannerMovilScaled})`;
document.getElementById('img-externo-final').style.backgroundImage = `url(${imgExternoFinal})`;

document.getElementById('img-externo-final-2').style.backgroundImage = `url(${imgExternoFinal2})`;
document.getElementById('img-artboard-1').style.backgroundImage = `url(${imgArtboard1})`;
document.getElementById('img-banner-externo-2').style.backgroundImage = `url(${imgBannerexterno2})`;

document.getElementById('img-banner-externo-22').style.backgroundImage = `url(${imgBannerexterno22})`;
document.getElementById('img-banner-movil-1').style.backgroundImage = `url(${imgBannerMovil1})`;
document.getElementById('img-externo-22').style.backgroundImage = `url(${imgExterno22})`;

document.getElementById('ol-externo2').style.backgroundImage = `url(${imgExterno2})`;
document.getElementById('ol-externo').style.backgroundImage = `url(${imgExterno})`;
document.getElementById('ol-banner-he').style.backgroundImage = `url(${imgExpoGalileoBannerMovilScaled})`;
document.getElementById('ol-externo-final').style.backgroundImage = `url(${imgExternoFinal2})`;
document.getElementById('ol-banner-externo2').style.backgroundImage = `url(${imgBannerexterno22})`;