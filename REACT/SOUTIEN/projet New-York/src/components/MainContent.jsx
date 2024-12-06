import "./MainContent.scss";
import Section from "./Section.jsx";
import Article from "./Article.jsx";

function App() {
  return (
    <>
      <blockquote>
        <p>
          Il y a quelque chose dans l’air de New York qui rend le sommeil
          inutile.
        </p>
        <cite>Simone de Beauvoir</cite>
      </blockquote>
      <Section titre="Symboles" id="symboles">
        <Article
          titre="Le drapeau"
          image="./img/flag-ny.png"
          imageAlt="Drapeau de New York"
          class="right"
        >
          <p>
            Le drapeau de New York se compose de bandes verticales bleue,
            blanche et orange, de largeur égale, les mêmes couleurs que le
            drapeau des Provinces-Unies tel qu'il était utilisé en 1625, l'année
            où Manhattan fut colonisée.
          </p>
          <p>
            En son centre est reproduit, en bleu, le{" "}
            <strong>sceau de la ville</strong>. Sur ce dernier figurent
            plusieurs éléments symboliques :
          </p>
          <ul class="clear">
            <li>
              <em>L'aigle</em> est un pygargue à tête blanche qui représente
              l'État de New York.
            </li>
            <li>
              <em>L'Amérindien</em> évoque les premiers habitants de la région,
              tandis que le marin évoque les colons : leur évocation conjointe
              suggère l'idée d'une union entre les deux peuples.
            </li>
            <li>
              <em>Les castors</em> font référence à la Compagnie néerlandaise
              des Indes occidentales, première compagnie à venir s'installer à
              New York.
            </li>
            <li>
              Le moulin à vent, les tonneaux de farine et les fleurs en
              couronne, représentent l’industrie new yorkaise.
            </li>
            <li>
              {" "}
              La devise latine{" "}
              <q class="italique" lang="la">
                &nbsp;Sigillum Civitatis Novi Eboraci&nbsp;
              </q>{" "}
              qui signifie : <q>&nbsp;Le sceau de la ville de New York&nbsp;</q>
              .
            </li>
          </ul>
        </Article>
        <Article
          titre="La statue de la liberté"
          image="./img/statue-of-liberty.jpg"
          imageAlt="Satue de la liberté"
          class="left"
        >
          <p>
            Pesant 204 tonnes et mesurant 92,9 mètres, elle est construite en
            France et offerte par le peuple français, en signe d'amitié entre
            les deux nations et pour célébrer le centenaire de la Déclaration
            d'indépendance américaine.
          </p>
          <p>
            La statue fut dévoilée au grand jour le 28 octobre 1886 en présence
            du président des États-Unis de l'époque, Grover Cleveland. L'idée
            est en général attribuée au juriste et professeur au Collège de
            France Édouard de Laboulaye. Le projet fut confié, en 1871, au
            sculpteur français Auguste Bartholdi.
          </p>
          <p>
            En raison de son statut de monument universel, la statue de la
            Liberté a été copiée et reproduite à différentes échelles et en
            divers endroits du globe. On en compte de nombreuses en France, la
            plus connue étant celle située à l'extrémité de l'île aux Cygnes à
            la hauteur du pont de Grenelle, près de l'ancien atelier de
            Bartholdi, qui est haute de 11,50 m. D'autres répliques sont
            également disséminées de part le monde : à Las Vegas, au Japon, en
            Espagne, au Kosovo ...
          </p>
        </Article>
      </Section>
      <Section
        titre="Géographie"
        id="geographie"
        image="./img/brooklyn-bridge.jpg"
        imageAlt="Statue de la liberté"
        imageClass="right"
      >
        <p>
          La ville s'étend sur plusieurs îles : la plus peuplée est celle de{" "}
          <strong>Manhattan</strong> où se trouve le cœur économique et culturel
          de l'agglomération. <strong>Governors Island</strong>,{" "}
          <strong>Liberty Island</strong> et <strong>Ellis Island</strong> sont
          de petites îles au sud de Manhattan dont les lieux historiques sont
          visités par les touristes. <strong>Staten Island</strong> est l'île la
          plus au sud de New York. Les arrondissements de <em>Brooklyn</em> et{" "}
          <em>Queens</em> occupent la partie occidentale de Long Island alors
          que le <em>Bronx</em> se trouve sur le continent, dans le Sud d'une
          presqu'île.
        </p>
        <p>
          Cette configuration insulaire nécessite la présence de nombreux ponts
          et tunnels qui relient les différentes parties de l'agglomération. Un
          service de traversiers permet également aux New-Yorkais de se déplacer
          facilement. Plusieurs détroits comme le <em>Long Island Sound</em> ou{" "}
          <em>The Narrows</em> séparent les différentes îles. Les eaux profondes
          de la baie de New York et les côtes très découpées fournissent de
          nombreuses autres petites baies abritées. Le site de New York apparaît
          à la fois comme un atout (ouverture maritime, défense naturelle) mais
          aussi comme un risque (inondations, élévation de la mer, raz-de-marée)
          pour la métropole.
        </p>
      </Section>
      <Section
        titre="Démographie"
        id="demographie"
        image="./img/taxi-cab.jpg"
        imageAlt="Rue de New-York avec taxis"
        imageClass="left"
      >
        <p>
          La ville de New York est la ville la plus peuplée des États-Unis, avec
          une population deux fois supérieure à la deuxième ville du pays, Los
          Angeles (3 743 995 habitants).{" "}
        </p>
        <p>
          Elle compte en effet <strong>8 175 133 habitants</strong> en 2010, ce
          qui représente près de 40 % de la population de l'État de New York. Le
          Grand New York ou New York Metropolitan area est l'aire urbaine la
          plus peuplée des États-Unis et la troisième du monde derrière Tokyo et
          Mexico.
        </p>
        <p>
          Cette région s'étend sur quatre États (New York, New Jersey,
          Connecticut, Pennsylvanie) et quelque <strong>17 400 km2</strong>. Sa
          population est de 18,8 millions d'habitants en 20. La CMSA de New York
          rassemble environ 22,2 millions d'habitants en 2009.
        </p>
        <p>
          La structure par âge révèle une population relativement jeune (11,9 %
          ont 65 ans ou plus) et une part importante de personnes ayant l'âge de
          travailler (75,8 %). En 2005, l'âge médian à New York est de 35,8 ans,
          soit un peu moins que la moyenne nationale (36,4 ans). Les femmes sont
          surreprésentées par rapport à la moyenne américaine (52,6 % de femmes
          pour 47,4 % d'hommes).
        </p>
      </Section>
    </>
  );
}

export default App;
