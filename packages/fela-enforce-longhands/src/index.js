// TODO: add the rest
const propertyPriority = {
  marginLeft: 2,
  marginRight: 2,
  marginTop: 2,
  marginBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingBottom: 2,
  paddingTop: 2,
  flexWrap: 2,
  flexShrink: 2,
  flexBasis: 2,
  backgroundColor: 2,
  backgroundRepeat: 2,
  backgroundPosition: 2,
  backgroundImage: 2,
  backgroundOrigin: 2,
  backgroundClip: 2,
  backgroundSize: 2,
  transitionProperty: 2,
  transitionTimingFunction: 2,
  transitionDuration: 2,
  transitionDelay: 2,
  animationDelay: 2,
  animationDirection: 2,
  animationDuration: 2,
  animationFillMode: 2,
  animationIterationCount: 2,
  animationName: 2,
  animationPlayState: 2,
  animationTimingFunction: 2,
  borderWidth: 2,
  borderStyle: 2,
  borderColor: 2,
  // these conflict with the longhands above
  borderTop: 2,
  borderRight: 2,
  borderBottom: 2,
  borderLeft: 2,
  borderTopWidth: 3,
  borderTopStyle: 3,
  borderTopColor: 3,
  borderRightWidth: 3,
  borderRightStyle: 3,
  borderRightColor: 3,
  borderBottomWidth: 3,
  borderBottomStyle: 3,
  borderBottomColor: 3,
  borderLeftWidth: 3,
  borderLeftStyle: 3,
  borderLeftColor: 3,
  borderBottomLeftRadius: 2,
  borderBottomRightRadius: 2,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  borderImageOutset: 2,
  borderImageRepeat: 2,
  borderImageSlice: 2,
  borderImageSource: 2,
  borderImageWidth: 2,
  columnWidth: 2,
  columnCount: 2,
  listStyleImage: 2,
  listStylePosition: 2,
  listStyleType: 2,
  outlineWidth: 2,
  outlineStyle: 2,
  outlineColor: 2,
  overflowX: 2,
  overflowY: 2,
  textDecorationLine: 2,
  textDecorationStyle: 2,
  textDecorationColor: 2,
}

// TODO: add option to choose whether directional borders or border shorthands take priority
// e.g. border-left: 2px solid grey vs. border-width: 4px
function enforceLonghands(renderer) {
  renderer.propertyPriority = propertyPriority
  return renderer
}

export default () => enforceLonghands
