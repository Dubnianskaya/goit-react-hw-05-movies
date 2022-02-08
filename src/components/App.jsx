import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Cast, Reviews } from 'components';
import { MoviesPage, HomePage, MovieDetailsPage } from 'pages';


// const createChunk = componentName => {
//   return lazy(() =>
//     import(`../pages/${componentName}`).then(module => ({
//       default: module[componentName],
//     }))
//   );
// };

// const MoviesPage = createChunk('MoviesPage');
// const ItemPage = createChunk('ItemPage');
// // const AddItemPage = createChunk('AddItemPage');
// const PreviewPage = createChunk('PreviewPage');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
