import { Svg, Path } from "react-native-svg";

export function TabBarIcon(props: {
  name: string;
  color: string;
  size: number;
}) {
  interface IconPaths {
    [key: string]: string;
  }

  const iconPaths: IconPaths = {
    // Define paths for each icon, you need to replace these with the actual paths
    album:
      "M16.0009 2.92896C16.7735 2.92885 17.537 3.09662 18.2383 3.42065C18.9397 3.74468 19.5624 4.21724 20.0631 4.80562C20.5639 5.39401 20.9308 6.08416 21.1386 6.82834C21.3463 7.57252 21.3899 8.35295 21.2662 9.11562L21.5409 9.04229C22.0507 8.89849 22.584 8.85738 23.1098 8.92134C23.6356 8.9853 24.1435 9.15306 24.604 9.41488C25.0644 9.6767 25.4683 10.0274 25.7921 10.4465C26.116 10.8657 26.3533 11.345 26.4905 11.8566C26.6276 12.3683 26.6617 12.9021 26.5909 13.427C26.52 13.9519 26.3456 14.4576 26.0778 14.9146C25.81 15.3716 25.4541 15.7708 25.0307 16.0891C24.6073 16.4075 24.125 16.6385 23.6116 16.769L21.3342 17.3796V18.393L23.7982 22.661C24.065 23.116 24.2392 23.6194 24.3106 24.1421C24.3821 24.6647 24.3495 25.1963 24.2146 25.7063C24.0798 26.2163 23.8454 26.6946 23.525 27.1137C23.2045 27.5327 22.8044 27.8842 22.3475 28.148C21.8907 28.4118 21.3862 28.5826 20.8631 28.6506C20.34 28.7186 19.8086 28.6824 19.2995 28.5442C18.7904 28.406 18.3136 28.1684 17.8967 27.8452C17.4798 27.522 17.131 27.1195 16.8702 26.661L16.0009 25.1556L15.1316 26.6623C14.5974 27.5735 13.7244 28.2365 12.7032 28.5064C11.6821 28.7764 10.5955 28.6315 9.68079 28.1034C8.76604 27.5752 8.09732 26.7067 7.82057 25.6873C7.54382 24.668 7.6815 23.5805 8.20357 22.6623L10.6676 18.3956V17.381L8.39023 16.7703C7.87684 16.6399 7.39447 16.4088 6.9711 16.0905C6.54773 15.7721 6.19181 15.3729 5.92398 14.9159C5.65616 14.4589 5.48177 13.9533 5.41093 13.4283C5.34009 12.9034 5.37422 12.3696 5.51134 11.858C5.64845 11.3463 5.88582 10.867 6.20966 10.4479C6.53351 10.0287 6.93738 9.67804 7.39784 9.41621C7.8583 9.15439 8.36618 8.98663 8.892 8.92267C9.41781 8.85871 9.9511 8.89982 10.4609 9.04362L10.7356 9.11695C10.6117 8.35418 10.6551 7.57361 10.8628 6.82927C11.0704 6.08492 11.4373 5.39459 11.9381 4.80606C12.4389 4.21752 13.0616 3.74484 13.7631 3.42073C14.4646 3.09662 15.2281 2.92882 16.0009 2.92896ZM16.0009 5.59562C15.467 5.5957 14.9455 5.75601 14.5037 6.05582C14.062 6.35563 13.7204 6.78112 13.5232 7.27723C13.326 7.77335 13.2822 8.31723 13.3976 8.83849C13.5129 9.35975 13.7821 9.83438 14.1702 10.201C14.3859 10.4047 14.5275 10.6746 14.5725 10.9678C14.6175 11.2611 14.5635 11.561 14.4189 11.8201C14.2743 12.0791 14.0474 12.2826 13.7741 12.3982C13.5009 12.5138 13.1969 12.5349 12.9102 12.4583L9.77023 11.6183C9.5995 11.5675 9.42032 11.5515 9.24328 11.5711C9.06624 11.5907 8.89492 11.6456 8.73945 11.7325C8.58397 11.8194 8.44749 11.9366 8.33807 12.0772C8.22864 12.2177 8.14848 12.3788 8.10233 12.5508C8.05618 12.7229 8.04497 12.9024 8.06936 13.0789C8.09375 13.2553 8.15325 13.4251 8.24434 13.5782C8.33544 13.7312 8.45628 13.8645 8.59973 13.9701C8.74318 14.0757 8.90634 14.1515 9.07957 14.193L12.3462 15.069C12.6295 15.1449 12.8798 15.3121 13.0584 15.5447C13.237 15.7774 13.334 16.0624 13.3342 16.3556V18.7503C13.3342 18.9843 13.2726 19.2143 13.1556 19.417L10.5129 23.9956C10.424 24.1473 10.3659 24.3151 10.3421 24.4893C10.3183 24.6635 10.3292 24.8408 10.3741 25.0107C10.419 25.1807 10.4972 25.3402 10.604 25.4799C10.7108 25.6195 10.8442 25.7367 10.9965 25.8246C11.1487 25.9126 11.3169 25.9695 11.4913 25.9922C11.6657 26.0148 11.8428 26.0028 12.0125 25.9567C12.1822 25.9106 12.3411 25.8314 12.4801 25.7237C12.619 25.616 12.7353 25.4818 12.8222 25.329L14.5916 22.2636C14.7086 22.0609 14.8769 21.8926 15.0796 21.7756C15.2823 21.6586 15.5122 21.597 15.7462 21.597H16.2556C16.4894 21.5972 16.719 21.6589 16.9215 21.7759C17.1239 21.8929 17.292 22.0611 17.4089 22.2636L19.1796 25.3303C19.3576 25.634 19.6486 25.855 19.989 25.945C20.3294 26.035 20.6916 25.9867 20.9965 25.8107C21.3014 25.6346 21.5243 25.3451 21.6166 25.0053C21.7088 24.6655 21.6629 24.303 21.4889 23.997L18.8462 19.4183C18.7292 19.2156 18.6676 18.9857 18.6676 18.7516V16.3556C18.6678 16.0624 18.7648 15.7774 18.9434 15.5447C19.122 15.3121 19.3723 15.1449 19.6556 15.069L22.9222 14.193C23.2638 14.1014 23.5551 13.8778 23.7318 13.5715C23.9086 13.2652 23.9565 12.9012 23.8649 12.5596C23.7733 12.218 23.5498 11.9268 23.2435 11.75C22.9372 11.5732 22.5732 11.5254 22.2316 11.617L19.0916 12.4583C18.8049 12.5349 18.5009 12.5138 18.2277 12.3982C17.9544 12.2826 17.7275 12.0791 17.5829 11.8201C17.4383 11.561 17.3843 11.2611 17.4293 10.9678C17.4743 10.6746 17.6159 10.4047 17.8316 10.201C18.2197 9.83438 18.4888 9.35975 18.6042 8.83849C18.7196 8.31723 18.6758 7.77335 18.4786 7.27723C18.2814 6.78112 17.9398 6.35563 17.4981 6.05582C17.0563 5.75601 16.5348 5.5957 16.0009 5.59562ZM16.0009 17.5956C16.3545 17.5956 16.6937 17.7361 16.9437 17.9861C17.1938 18.2362 17.3342 18.5753 17.3342 18.929C17.3342 19.2826 17.1938 19.6217 16.9437 19.8718C16.6937 20.1218 16.3545 20.2623 16.0009 20.2623C15.6473 20.2623 15.3081 20.1218 15.0581 19.8718C14.808 19.6217 14.6676 19.2826 14.6676 18.929C14.6676 18.5753 14.808 18.2362 15.0581 17.9861C15.3081 17.7361 15.6473 17.5956 16.0009 17.5956ZM16.0009 13.5956C16.3545 13.5956 16.6937 13.7361 16.9437 13.9861C17.1938 14.2362 17.3342 14.5753 17.3342 14.929C17.3342 15.2826 17.1938 15.6217 16.9437 15.8718C16.6937 16.1218 16.3545 16.2623 16.0009 16.2623C15.6473 16.2623 15.3081 16.1218 15.0581 15.8718C14.808 15.6217 14.6676 15.2826 14.6676 14.929C14.6676 14.5753 14.808 14.2362 15.0581 13.9861C15.3081 13.7361 15.6473 13.5956 16.0009 13.5956Z",
    hotel:
      "M17.6373 3.58407C17.1692 3.21992 16.593 3.02222 16 3.02222C15.4069 3.02222 14.8308 3.21992 14.3626 3.58407L3.18398 12.2774C2.18131 13.0601 2.73331 14.6667 4.00398 14.6667H5.45998L6.55331 25.5987C6.61911 26.2567 6.92705 26.8668 7.41735 27.3106C7.90766 27.7543 8.54535 28 9.20664 28.0001H22.7933C23.4546 28 24.0923 27.7543 24.5826 27.3106C25.0729 26.8668 25.3808 26.2567 25.4466 25.5987L26.54 14.6667H27.996C29.2653 14.6667 29.82 13.0601 28.816 12.2787L17.6373 3.58407ZM16 21.3334C17.0608 21.3334 18.0783 20.912 18.8284 20.1618C19.5786 19.4117 20 18.3943 20 17.3334C20 16.2725 19.5786 15.2551 18.8284 14.505C18.0783 13.7548 17.0608 13.3334 16 13.3334C14.9391 13.3334 13.9217 13.7548 13.1715 14.505C12.4214 15.2551 12 16.2725 12 17.3334C12 18.3943 12.4214 19.4117 13.1715 20.1618C13.9217 20.912 14.9391 21.3334 16 21.3334Z",
    user: "M16 2.66675C23.364 2.66675 29.3333 8.63608 29.3333 16.0001C29.3333 23.3641 23.364 29.3334 16 29.3334C8.63596 29.3334 2.66663 23.3641 2.66663 16.0001C2.66663 8.63608 8.63596 2.66675 16 2.66675ZM16 5.33341C13.3463 5.33486 10.7884 6.3254 8.82594 8.1116C6.86344 9.8978 5.6372 12.3514 5.38671 14.9932C5.13622 17.635 5.87946 20.2754 7.47128 22.3986C9.06311 24.5218 11.3892 25.9754 13.9953 26.4756C16.6014 26.9757 19.3004 26.4865 21.5651 25.1034C23.8299 23.7204 25.4978 21.5428 26.2431 18.9959C26.9884 16.4491 26.7576 13.7159 25.5958 11.3301C24.434 8.94423 22.4246 7.07715 19.96 6.09342C20.0775 6.90392 19.9435 7.73098 19.5759 8.46286C19.2083 9.19473 18.625 9.79614 17.9046 10.1858C17.1843 10.5755 16.3617 10.7347 15.548 10.6419C14.7343 10.549 13.9687 10.2087 13.3546 9.66675C13.0996 9.44258 12.9397 9.12957 12.9076 8.79156C12.8754 8.45355 12.9734 8.116 13.1816 7.84778C13.3898 7.57955 13.6925 7.40086 14.0279 7.34814C14.3633 7.29542 14.7062 7.37265 14.9866 7.56408L15.1186 7.66675C15.2804 7.80946 15.4745 7.91077 15.6841 7.96198C15.8937 8.01319 16.1126 8.01277 16.322 7.96076C16.5314 7.90875 16.725 7.8067 16.8863 7.66337C17.0475 7.52005 17.1716 7.33972 17.2479 7.13788C17.3241 6.93604 17.3502 6.71871 17.324 6.50455C17.2977 6.2904 17.2199 6.08581 17.0972 5.90835C16.9745 5.73089 16.8105 5.58587 16.6194 5.48573C16.4283 5.38559 16.2157 5.33332 16 5.33341ZM19.52 20.3094C19.7915 20.5358 19.9619 20.8607 19.9939 21.2127C20.0259 21.5648 19.9168 21.9151 19.6906 22.1867C18.7946 23.2627 17.4986 24.0001 16 24.0001C14.5013 24.0001 13.2053 23.2627 12.3093 22.1867C12.0929 21.9141 11.9918 21.5676 12.0275 21.2214C12.0631 20.8751 12.2328 20.5565 12.5002 20.3337C12.7676 20.1109 13.1115 20.0014 13.4585 20.0288C13.8056 20.0561 14.1281 20.2181 14.3573 20.4801C14.836 21.0534 15.4213 21.3334 16 21.3334C16.5786 21.3334 17.164 21.0534 17.6426 20.4801C17.869 20.2086 18.1939 20.0381 18.546 20.0061C18.898 19.9741 19.2483 20.0832 19.52 20.3094ZM11.3333 13.3334C11.8637 13.3334 12.3724 13.5441 12.7475 13.9192C13.1226 14.2943 13.3333 14.803 13.3333 15.3334C13.3333 15.8638 13.1226 16.3726 12.7475 16.7476C12.3724 17.1227 11.8637 17.3334 11.3333 17.3334C10.8029 17.3334 10.2942 17.1227 9.91908 16.7476C9.54401 16.3726 9.33329 15.8638 9.33329 15.3334C9.33329 14.803 9.54401 14.2943 9.91908 13.9192C10.2942 13.5441 10.8029 13.3334 11.3333 13.3334ZM20.6666 13.3334C21.1971 13.3334 21.7058 13.5441 22.0808 13.9192C22.4559 14.2943 22.6666 14.803 22.6666 15.3334C22.6666 15.8638 22.4559 16.3726 22.0808 16.7476C21.7058 17.1227 21.1971 17.3334 20.6666 17.3334C20.1362 17.3334 19.6275 17.1227 19.2524 16.7476C18.8773 16.3726 18.6666 15.8638 18.6666 15.3334C18.6666 14.803 18.8773 14.2943 19.2524 13.9192C19.6275 13.5441 20.1362 13.3334 20.6666 13.3334Z",
  };

  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 30 30"
      fill={props.color}
      style={{ marginTop: 11 }}
    >
      <Path d={iconPaths[props.name]} />
    </Svg>
  );
}
