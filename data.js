// =====================================================
//   data.js  —  solo tú editas este archivo
//   PLANTILLA GENÉRICA: llena esto con los datos de la
//   nueva persona (nombre, canciones, fotos, cartas, etc.)
// =====================================================

const FRIEND_NAME = "Seño";             // 👈 su nombre
const ADMIN_PASS  = "admin123";         // 👈 tu contraseña (modo edición)
const GUEST_PASS  = "Seño";             // 👈 su contraseña

// Firma que aparece al final de las cartas (quién regala esto)
const SIGNATURE_NAME = "seño";

// ─────────────────────────────────────────────────────
//  DEDICATORIA PRINCIPAL (botón 💜 flotante)
// ─────────────────────────────────────────────────────
const DEDICA_TITLE     = "Para ti";
const DEDICA_SONG      = "A Sky Full of Stars.mp3";
const DEDICA_SONG_NAME = "A Sky Full of Stars";
const DEDICA_ARTIST    = "Coldplay";
const DEDICA_IMG       = "A Sky Full of Stars.jpg";
const DEDICA_MESSAGE = `
Seño, esto lo armé pensando en ti, en las risas que nos hemos sacado y en todo lo
que agradezco tenerte cerca. No hacía falta un motivo grande para hacerte este
regalo — a veces las personas importantes simplemente se merecen que se los
recuerden así, sin razón especial. Gracias por ser de las buenas, de las que
se quedan. 🩷
`;

// ─────────────────────────────────────────────────────
//  CANCIÓN ESPECIAL 1 (carta lateral derecha)
// ─────────────────────────────────────────────────────
const DEDICA2_SONG      = "Linkin Park One More Light.mp3";
const DEDICA2_SONG_NAME = "One More Light";
const DEDICA2_ARTIST    = "Linkin Park";
const DEDICA2_IMG       = "One More Light.jpg";
const DEDICA2_WHY = `
Esta canción te la dedico porque me recuerda a lo constante que eres: pase lo
que pase, ahí sigues, firme, como debe ser.
`;
const DEDICA2_MESSAGE = `
Ojalá la escuches y sientas un poquito de lo que yo siento cuando pienso en
nuestra amistad: tranquilidad, cariño y muchísimas ganas de seguir sumando
momentos contigo, Seño.
`;

// ─────────────────────────────────────────────────────
//  CANCIÓN ESPECIAL 2 (carta lateral derecha)
// ─────────────────────────────────────────────────────
const DEDICA3_SONG      = "Always with Me.mp3";
const DEDICA3_SONG_NAME = "Always with Me";
const DEDICA3_ARTIST    = "Youmi Kimura";
const DEDICA3_IMG       = "Always With Me.jpg";
const DEDICA3_MESSAGE = `
Esta es más para los días raros, esos donde todo pesa un poco más — para
recordarte que no estás sola y que siempre vas a tener a alguien de tu lado,
sin condiciones.
`;

// ─────────────────────────────────────────────────────
//  FECHA DESDE QUE SE CONOCEN (formato YYYY-MM-DD)
// ─────────────────────────────────────────────────────
const FRIENDSHIP_START = "2018-03-28";   // 👈 cambia por la fecha real
const FRIENDSHIP_PHOTO = "Evidencia Amistad.jpeg"; // 👈 ej: "evidencia.jpg" (foto de ese día)
const FRIENDSHIP_PHOTO_CAPTION = "17 de abril de 2020"; // 👈 ej: "14 de abril de 2023"

// ─────────────────────────────────────────────────────
//  CUENTA REGRESIVA hacia fecha especial
// ─────────────────────────────────────────────────────
const COUNTDOWN_DATE  = "2026-12-31";    // 👈 la fecha especial (cumpleaños, etc)
const COUNTDOWN_LABEL = "tu día especial 🎂";

// ─────────────────────────────────────────────────────
//  CUMPLEAÑOS 🎂 — solo aparece el día de su cumple
// ─────────────────────────────────────────────────────
const BDAY_SONG      = "";               // 👈 canción al presionar "Ver mi regalo"
const BDAY_SONG_NAME = "Nombre de la canción";
const BDAY_ARTIST    = "Artista";

const BDAY_IMG = "";  // 👈 imagen en la carta de cumpleaños (vacío = sin imagen)

// ─── Canción sorpresa de cumpleaños ───
const BDAY_PAULO_SONG      = "";                 // 👈 nombre exacto del mp3
const BDAY_PAULO_SONG_NAME = "Nombre de la canción";
const BDAY_PAULO_ARTIST    = "Artista";
const BDAY_PAULO_BADGE     = "🎁 sorpresa";
const BDAY_PAULO_IMG       = "";                 // 👈 ej: "sorpresa.jpg"
const BDAY_PAULO_MESSAGE = `
Esta es la sorpresa de verdad: toda esta página, cada personaje, cada detalle,
lo armé pensando en sacarte una sonrisa. Feliz cumpleaños, Seño — ojalá se
note cuánto significas.
`;

// Mensaje que aparece en la pantalla de bienvenida de cumpleaños
const BDAY_WELCOME_MSG = `¡Feliz cumpleaños, Seño! 🎂 Espero que la pases increíble en tu día, te lo mereces todo 🩷`;

const BDAY_LETTER_TITLE = "Feliz Cumpleaños";
const BDAY_LETTER = `
SEÑITOOOOOOOOOOOO muy linda, ¡feliz cumpleaños! 🎂🩷 Ya cada vez más grande
jsjsjs, espero que se la pase increíble y súper en su día especial. ✨

Hace 8 años que la conocí y la verdad no me arrepiento, ha sido muy bonito
conocerla. Le tengo mucho aprecio, seño, de verdad — de las pocas amigas
con las que llevo tanto tiempo hablando JAJAJS. 💜

Seño, luego hay que hacer un goal, ya se le extraña, antes hacíamos varios.
También me gusta jugar con usted, seño, me la paso muy bien mankeando de
repente, aunque a veces nos enojemos con los aliados JAJAJS — neta se pasan
a veces. Muchas gracias por tenerme paciencia también cuando me estaba
enseñando a jugar, TQMMM. 🌟

Y por último, seño, quiero decirle que cualquier cosa que necesite me puede
decir, siempre estaré para apoyarla o darle ánimos si los necesita. Espero
estar aún más tiempo siendo amigos, la aprecio un millón, seño, TQMMM.
Cuídese mucho y espero que logre terminar sus metas, ya que le anda dando
duro a la uni siempre. 💖
`;

// ─────────────────────────────────────────────────────
//  RAZONES POR LAS QUE TE QUIERO (botón 💖)
//  Cada vez que dé clic, sale una al azar
// ─────────────────────────────────────────────────────
const RAZONES = [
  "porque siempre me escuchas 💜",
  "porque eres muy leal ✨",
  "porque nunca me juzgas 🩷",
  "porque eres muy paciente conmigo 🌟",
  "porque siempre me apoyas 💫",
  "porque te preocupas por mí 🩷",
  "porque me haces sentir en confianza ✨",
  "porque eres una gran amiga 💜",
  // 👇 agrega las que quieras
];

// ─────────────────────────────────────────────────────
//  MENSAJES EN GLOBOS (botón 🎈)
//  Al reventar un globo sale un mensaje
// ─────────────────────────────────────────────────────
const GLOBO_MESSAGES = [
  "¡sorpresa! 🎉",
  "te quiero un montón 🩷",
  "sigue brillando 🌟",
  "eres increíble ✨",
  "gracias por existir 💜",
  "nunca cambies 🌸",
  // 👇 agrega los que quieras
];

// ─────────────────────────────────────────────────────
//  CUMPLIDOS DEL FRASCO 🫙
// ─────────────────────────────────────────────────────
const CUMPLIDOS = [
  "gracias por ser mi amiga 🩷",
  "qué suerte tengo de tenerte cerca 🌸",
  "eres una persona increíble, no lo dudes nunca ✨",
  "tu amistad es de las cosas más bonitas de mi vida 💜",
  "me alegro tanto de haberte conocido 🌟",
  "eres muy especial para mí 💗",
  "contigo todo se siente más ligero 🌷",
  "eres pura energía buena, no cambies 🌈",
  "ojalá nunca dejemos de ser amigos 💞",
  "siempre puedes contar conmigo, lo sabes 🩷",
  "eres de las personas más buenas que conozco 💫",
  "que la vida te dé todo lo que mereces 🌸",
  // 👇 agrega las que quieras
];

// ─────────────────────────────────────────────────────
//  FRASES RANDOM — aparece una al azar en bienvenida
// ─────────────────────────────────────────────────────
const RANDOM_PHRASES = [
  "esto lo hice pensando en ti 🩷",
  "cada canción aquí es para ti ✨",
  "gracias por estar siempre 💜",
  "tu amistad es mi regalo favorito ⭐",
  "que nunca te olvides de lo especial que eres 🎵",
];

// ─────────────────────────────────────────────────────
//  MENSAJE GENERAL (botón flotante 💌)
// ─────────────────────────────────────────────────────
const GENERAL_MESSAGE = `
No necesito una fecha especial para decirte esto: eres de las personas que
hacen que valga la pena tener amigos. Gracias por estar, por escuchar, por
ser tú. 🩷
`;

// ─────────────────────────────────────────────────────
//  CARTA SECRETA — easter egg al tocar el corazón 5 veces
// ─────────────────────────────────────────────────────
const SECRET_CARD = `
A veces no te lo digo tan seguido como debería, pero valoro muchísimo
tenerte cerca, Seño. Eres de las amistades que uno cuida porque sabe que no
todos los días se encuentra a alguien así. Gracias por ser parte de mi
vida. 💜
`;

// ─────────────────────────────────────────────────────
//  CARTA FINAL — el cierre del regalo
//  Aparece con el botón especial al final
// ─────────────────────────────────────────────────────
const FINAL_LETTER_TITLE = "Para terminar...";
const FINAL_LETTER = `
Y así termina este pequeño regalo — hecho con cariño, con Saint Seiya, con
todos tus personajes favoritos y con muchas ganas de que sepas lo importante
que eres para mí. Gracias por ser mi Seño favorita. Nos vemos pronto. 🩷⚔️
`;

// ─────────────────────────────────────────────────────
//  LIBRO DE RECUERDOS — cada página: foto + texto + fecha
// ─────────────────────────────────────────────────────
const MEMORIES_BOOK = [
  { img: "Recuerdo.jpeg", fecha: "", text: `me acuerdo que me mandó sus uñas, le quedaron chidas 💅` },
  { img: "Recuerdo 2.jpeg", fecha: "", text: `JAJAJSJ no me acuerdo bien pero estábamos con pura chiquita 🎮✨` },
  { img: "Recuerdo 3.jpeg", fecha: "", text: `mireeeeee señoooooo su cuenta cuando era bb 🛡️` },
  { img: "Recuerdo 4.jpeg", fecha: "", text: `pido perdón, seño` },
  // 👇 último recuerdo: video en vez de foto — se reproduce con controles
  { video: "Borracha.mp4", fecha: "", text: `Es este video JAJAJSJ` },
  // 👇 agrega las páginas que quieras
];

// =====================================================
//   PERSONAJES / GALERÍA DE CANCIONES
//   cat: "paulo" = categoría destacada (sale primero, borde DORADO)
//        -> aquí van los personajes de Saint Seiya
//   otros valores libres para cat: "kirby", "peach", "otro"
//   (uso solo para variar el color del tema del modal)
//
//   ⚠️ Le puse a "Nolan" la canción "HUMBE - Te Lo Prometo" (se
//   había quedado libre al reasignar las de Seiya 1-4) — si la
//   querías para otro personaje, dime y la muevo.
//   "series" de Leon/Leon 2 la cambié a "Resident Evil 4" (por la
//   canción que le pusiste y la imagen) y la de Violet/Violet 2 a
//   "Violet Evergarden" (antes decía "Los Increíbles", pero las
//   canciones que mandaste son claramente de ese anime) — avísame
//   si alguna no es correcta. "Nolan" sigue como "Invincible" (mi
//   mejor suposición, sin confirmar).
//
//   🖼️ "pos" (opcional): controla qué parte de la imagen se ve dentro
//   de la tarjeta/modal (por defecto se recorta un poco desde arriba).
//   Es el mismo valor que usa CSS "object-position": "horizontal vertical",
//   en porcentaje. Súbelo (ej. "50% 10%") para mostrar más la parte de
//   ARRIBA de la foto (cabeza), o bájalo (ej. "50% 60%") para mostrar
//   más la parte de ABAJO. Si una imagen se ve mal recortada, agrégale
//   o ajústale este campo — no hace falta tocar el CSS.
// =====================================================
const characters = [
  {
    name: "Seiya", series: "Saint Seiya", cat: "paulo",
    img: "Seiya 1.jpg",
    song: "Pegasus Fantasy Latino.mp3",
    songName: "Pegasus Fantasy",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Seiya 2", series: "Saint Seiya", cat: "paulo",
    img: "Seiya 2.jpg",
    song: "Saint Seiya Ending Latino..mp3",
    songName: "Saint Seiya (Ending Latino)",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Seiya 3", series: "Saint Seiya", cat: "paulo",
    img: "Seiya 3.jpg",
    song: "Saint Seiya Japones.mp3",
    songName: "Saint Seiya (Japonés)",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Seiya 4", series: "Saint Seiya", cat: "paulo",
    img: "Seiya 4.jpg",
    song: "Saint Seiya The Lost Canvas.mp3",
    songName: "The Lost Canvas",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Andromeda", series: "Saint Seiya", cat: "paulo",
    img: "Andromeda.jpg",
    song: "Amar Como Tu Steven Universe.mp3",
    songName: "Amar Como Tú",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Shiryu", series: "Saint Seiya", cat: "paulo",
    img: "Shiryu.jpg",
    song: "Chayanne, Danna Paola - Veo en ti la luz.mp3",
    songName: "Veo en Ti la Luz",
    artist: "Chayanne, Danna Paola",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Shiryu 2", series: "Saint Seiya", cat: "paulo",
    img: "Shiryu 1.jpg",
    song: "Corridos Onichan COQUETA.mp3",
    songName: "Coqueta",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Hyoga", series: "Saint Seiya", cat: "paulo",
    img: "Hyoga.jpg",
    song: "Emmanuel Cortes- Amor.mp3",
    songName: "Amor",
    artist: "Emmanuel Cortés",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Ikki", series: "Saint Seiya", cat: "paulo",
    img: "Ikki.jpg",
    song: "Grupo Frontera, Manuel Turizo  - La Del Proceso.mp3",
    songName: "La Del Proceso",
    artist: "Grupo Frontera, Manuel Turizo",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Gon", series: "Hunter x Hunter", cat: "otro",
    img: "Gon.jpg",
    pos: "50% 42%",
    song: "Hyori Ittai Hunter x Hunter.mp3",
    songName: "Hyorittai",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Kurapika", series: "Hunter x Hunter", cat: "otro",
    img: "KuraPika.jpg",
    song: "Hunting For Your Dream.mp3",
    songName: "Hunting for Your Dream",
    artist: "FLOW",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Gusion", series: "Mobile Legends", cat: "otro",
    img: "Gusion.jpg",
    song: "Casey Edwards Bury the Light .mp3",
    songName: "Bury the Light",
    artist: "Casey Edwards",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Estes", series: "Mobile Legends", cat: "otro",
    img: "Estes.jpg",
    song: "Yiruma River Flows in You.mp3",
    songName: "River Flows in You",
    artist: "Yiruma",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Lancelot", series: "Mobile Legends", cat: "otro",
    img: "Lance.jpg",
    song: "Mon Laferte Tu Falta De Querer.mp3",
    songName: "Tu Falta de Querer",
    artist: "Mon Laferte",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Kirby", series: "Kirby", cat: "kirby",
    img: "Kirby.jpg",
    song: "Sigo aqui Alex Ubago.mp3",
    songName: "Sigo Aquí",
    artist: "Alex Ubago",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Kirby 2", series: "Kirby", cat: "kirby",
    img: "Kirby 1.jpg",
    song: "Coldplay Yellow.mp3",
    songName: "Yellow",
    artist: "Coldplay",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Leon", series: "Resident Evil 4", cat: "peach",
    img: "Leon.jpg",
    song: "Bad Wolves Zombie.mp3",
    songName: "Zombie",
    artist: "Bad Wolves",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Leon 2", series: "Resident Evil 4", cat: "peach",
    img: "Leon 1.jpg",
    pos: "50% 55%",
    song: "Evanescence Bring Me To Life.mp3",
    songName: "Bring Me to Life",
    artist: "Evanescence",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Mao Mao", series: "Mao Mao: Heroes of Pure Heart", cat: "peach",
    img: "Mao Mao.jpg",
    song: "Kusuriya no Hitorigoto.mp3",
    songName: "Kusuriya no Hitorigoto",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Nolan", series: "Invincible", cat: "otro",
    img: "Nolan.jpg",
    song: "HUMBE Te Lo Prometo.mp3",
    songName: "Te Lo Prometo",
    artist: "Humbe",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Rengoku", series: "Kimetsu no Yaiba", cat: "peach",
    img: "Rengoku.jpg",
    song: "Homura Lisa.mp3",
    songName: "Homura",
    artist: "LiSA",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Rengoku 2", series: "Kimetsu no Yaiba", cat: "peach",
    img: "Rengoku 2.jpg",
    song: "Kimetsu No Yaiba Kamado Tanjirou No Uta.mp3",
    songName: "Kamado Tanjirou no Uta",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Senku", series: "Dr. Stone", cat: "otro",
    img: "Senku.jpg",
    song: "Dr. STONE Ending LIFE.mp3",
    songName: "LIFE",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Senku 2", series: "Dr. Stone", cat: "otro",
    img: "Senku 1.jpg",
    song: "Dr. Stone_ SCIENCE FUTURE.mp3",
    songName: "Science Future",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Violet", series: "Violet Evergarden", cat: "peach",
    img: "Violet.jpg",
    song: "Violet Evergarden Letter.mp3",
    songName: "Letter",
    artist: "",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Violet 2", series: "Violet Evergarden", cat: "peach",
    img: "Violet 2.jpg",
    song: "Violet Evergarden Opening  Sincerely.mp3",
    songName: "Sincerely",
    artist: "TRUE",
    mensaje: `// escribe aquí un mensaje para este personaje/canción`
  },
  {
    name: "Chavo Colgado", series: "El Chavo del 8", cat: "otro",
    img: "Chavo Colgado.jpg",
    song: "Mr loverman Ricky Montgomery.mp3",
    songName: "Mr. Loverman",
    artist: "Ricky Montgomery",
    mensaje: `Esta te la puse solo para sacarte una carcajada — como el Chavo, a veces la vida nos deja "colgados" en cosas random, pero contigo hasta eso se vuelve motivo de risa 😂🩷`
  },
  {
    name: "Spy Family", series: "Spy x Family", cat: "otro",
    img: "Spy Family.jpg",
    song: "Spy x Family Protect the Light.mp3",
    songName: "Protect the Light",
    artist: "",
    mensaje: `Como en Spy x Family, a veces la familia de verdad no es la que nos tocó, sino la que uno elige — y tú, Seño, eres de las personas que elegiría una y mil veces 💜`
  }
];
