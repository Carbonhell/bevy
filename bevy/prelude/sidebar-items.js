window.SIDEBAR_ITEMS = {"attr":[["bevy_main",""],["reflect_trait","A macro that automatically generates type data for traits, which their implementors can then register."]],"derive":[["Bundle",""],["Component",""],["Deref","Implements `Deref` for single-item structs. This is especially useful when utilizing the newtype pattern."],["DerefMut","Implements `DerefMut` for single-item structs. This is especially useful when utilizing the newtype pattern."],["DynamicPlugin","Generates a dynamic plugin entry point function for the given `Plugin` type."],["FromReflect","Derives the `FromReflect` trait."],["Reflect","The main derive macro used by `bevy_reflect` for deriving its `Reflect` trait."],["Resource",""],["States",""],["SystemSet","Derive macro generating an impl of the trait `SystemSet`."]],"enum":[["AlignContent","Defines how each line is aligned within the flexbox."],["AlignItems","How items are aligned according to the cross axis"],["AlignSelf","How this item is aligned according to the cross axis. Overrides [`AlignItems`]."],["AlphaMode","Sets how a material’s base color alpha channel is used for transparency."],["AssetEvent","Events that involve assets of type `T`."],["Color",""],["CursorIcon","The icon to display for a window’s cursor."],["Direction","Defines the text direction"],["Display","Whether to use a Flexbox layout model."],["DynamicPluginLoadError","Errors that can occur when loading a dynamic plugin"],["EulerRot","Euler rotation sequences."],["FileDragAndDrop","Events related to files being dragged and dropped on a window."],["FlexDirection","Defines how flexbox items are ordered within a flexbox"],["FlexWrap","Defines if flexbox items appear on a single line or on multiple lines"],["FogFalloff","Allows switching between different fog falloff modes, and configuring their parameters."],["GamepadAxisType","A type of a [`GamepadAxis`]."],["GamepadButtonType","A type of a [`GamepadButton`]."],["Ime","A Input Method Editor event."],["Interaction","Describes what type of input interaction has occurred for a UI node."],["JustifyContent","Defines how items are aligned according to the main axis"],["KeyCode","The key code of a `KeyboardInput`."],["Keyframes","List of keyframes for one of the attribute of a [`Transform`]."],["MonitorSelection","Defines which monitor to use."],["MouseButton","A button on a mouse device."],["Msaa","Configuration resource for Multi-Sample Anti-Aliasing."],["Overflow","Whether to show or hide overflowing items"],["PositionType","The strategy used to position this node"],["Projection","A configurable [`CameraProjection`] that can select its projection type at runtime."],["TextAlignment","Describes horizontal alignment preference for positioning & bounds."],["TextError",""],["TimerMode","Specifies [`Timer`] behavior."],["Val","An enum that describes possible types of value in flexbox layout options"],["ValArithmeticError",""],["Visibility","User indication of whether an entity is visible. Propagates down the entity hierarchy."],["WindowPosition","Defines where window should be placed at on creation."],["ZIndex","Indicates that this [`Node`] entity’s front-to-back ordering is not controlled solely by its location in the UI hierarchy. A node with a higher z-index will appear on top of other nodes with a lower z-index."]],"fn":[["any_with_component","Generates a `Condition`-satisfying closure that returns `true` if there are any entities with the given component type."],["apply_state_transition","If a new state is queued in [`NextState<S>`], this system:"],["apply_system_buffers","Instructs the executor to call `apply_buffers` on the systems that have run but not applied their buffers."],["dbg","System adapter that utilizes the [`bevy_utils::tracing::debug!`] macro to print the output of a system."],["default","An ergonomic abbreviation for [`Default::default()`] to make initializing structs easier. This is especially helpful when combined with “struct update syntax”."],["despawn_with_children_recursive","Function for despawning an entity and all its children"],["dynamically_load_plugin","Dynamically links a plugin at the given path. The plugin must export a function with the [`CreatePlugin`] signature named `_bevy_create_plugin`."],["error","System adapter that utilizes the [`bevy_utils::tracing::error!`] macro to print the output of a system."],["ignore","System adapter that ignores the output of the previous system in a pipe. This is useful for fallible systems that should simply return early in case of an `Err`/`None`."],["in_state","Generates a `Condition`-satisfying closure that returns `true` if the state machine is currently in `state`."],["info","System adapter that utilizes the [`bevy_utils::tracing::info!`] macro to print system information."],["not","Generates a `Condition` that inverses the result of passed one."],["on_event","Generates a `Condition`-satisfying closure that returns `true` if there are any new events of the given type since it was last called."],["resource_added","Generates a `Condition`-satisfying closure that returns `true` if the resource of the given type has been added since the condition was last checked."],["resource_changed","Generates a `Condition`-satisfying closure that returns `true` if the resource of the given type has had its value changed since the condition was last checked."],["resource_changed_or_removed","Generates a `Condition`-satisfying closure that returns `true` if the resource of the given type has had its value changed since the condition was last checked."],["resource_equals","Generates a `Condition`-satisfying closure that returns `true` if the resource is equal to `value`."],["resource_exists","Generates a `Condition`-satisfying closure that returns `true` if the resource exists."],["resource_exists_and_changed","Generates a `Condition`-satisfying closure that returns `true` if the resource of the given type has had its value changed since the condition was last checked."],["resource_exists_and_equals","Generates a `Condition`-satisfying closure that returns `true` if the resource exists and is equal to `value`."],["resource_removed","Generates a `Condition`-satisfying closure that returns `true` if the resource of the given type has been removed since the condition was last checked."],["run_once","Generates a `Condition`-satisfying closure that returns `true` if the first time the condition is run and false every time after"],["state_changed","Generates a `Condition`-satisfying closure that returns `true` if the state machine changed state."],["state_exists","Generates a `Condition`-satisfying closure that returns `true` if the state machine exists."],["state_exists_and_equals","Generates a `Condition`-satisfying closure that returns `true` if the state machine exists and is currently in `state`."],["text_constraint","Defines how `min_size`, `size`, and `max_size` affects the bounds of a text block."],["text_system","Updates the layout and size information whenever the text or style is changed. This information is computed by the `TextPipeline` on insertion, then stored."],["unwrap","System adapter that unwraps the `Ok` variant of a [`Result`]. This is useful for fallible systems that should panic in the case of an error."],["update_image_calculated_size_system","Updates calculated size of the node based on the image provided"],["warn","System adapter that utilizes the [`bevy_utils::tracing::warn!`] macro to print the output of a system."]],"macro":[["debug","Constructs an event at the debug level."],["debug_span","Constructs a span at the debug level."],["error","Constructs an event at the error level."],["error_span","Constructs a span at the error level."],["info","Constructs an event at the info level."],["info_span","Constructs a span at the info level."],["trace","Constructs an event at the trace level."],["trace_span","Constructs a span at the trace level."],["warn","Constructs an event at the warn level."],["warn_span","Constructs a span at the warn level."]],"mod":[["shape","Generation for some primitive shape meshes."],["system_adapter","A collection of common adapters for piping the result of a system."]],"struct":[["AddChild","Command that adds a child to an entity"],["Added","A filter on a component that only retains results added after the system last ran."],["AmbientLight","An ambient light, which lights the entire scene equally."],["AncestorIter","An [`Iterator`] of [`Entity`]s over the ancestors of an [`Entity`]."],["AnimationClip","A list of [`VariableCurve`], and the [`EntityPath`] to which they apply."],["AnimationPlayer","Animation controls"],["AnimationPlugin","Adds animation support to an app"],["AnyOf","The `AnyOf` query parameter fetches entities with any of the component types included in T."],["App","A container of app logic and data."],["AppTypeRegistry","The [`Resource`] that stores the [`App`]’s `TypeRegistry`."],["AssetPlugin","Adds support for [`Assets`] to an App."],["AssetServer","Loads assets from the filesystem in the background."],["Assets","Stores Assets of a given type and tracks changes to them."],["Audio","Use this [`Resource`] to play audio."],["AudioOutput","Used internally to play audio on the current “audio device”"],["AudioSink","Asset controlling the playback of a sound"],["AudioSource","A source of audio data"],["Axis","Stores the position data of the input devices of type `T`."],["BSpline","A spline interpolated continuously across the nearest four control points. The curve does not pass through any of the control points."],["BVec2","A 2-dimensional `bool` vector mask."],["BVec3","A 3-dimensional `bool` vector mask."],["BVec4","A 4-dimensional `bool` vector mask."],["BackgroundColor","The background color of the node"],["Bezier","A spline composed of a series of cubic Bezier curves."],["Button","Marker struct for buttons"],["ButtonBundle","A UI node that is a button"],["CalculatedClip","The calculated clip of the node"],["CalculatedSize","The calculated size of the node"],["Camera","The defining component for camera entities, storing information about how and what to render through this camera."],["Camera2d",""],["Camera2dBundle",""],["Camera3d","Configuration for the “main 3d render graph”."],["Camera3dBundle",""],["CardinalSpline","A spline interpolated continuously across the nearest four control points, with the position of the curve specified at every control point and the tangents computed automatically."],["Changed","A filter on a component that only retains results added or mutably dereferenced after the system last ran."],["ChildBuilder","Struct for building children onto an entity"],["Children","Contains references to the child entities of this entity."],["ClearChildren","Command that clear all children from an entity."],["ClearColor","A [`Resource`] that stores the color that is used to clear the screen between frames."],["ColorMaterial","A 2d material that renders 2d meshes with a texture tinted by a uniform color"],["Commands","A [`Command`] queue to perform impactful changes to the [`World`]."],["ComputedVisibility","Algorithmically-computed indication of whether an entity is visible and should be extracted for rendering"],["CubicSegment","A segment of a cubic curve, used to hold precomputed coefficients for fast interpolation."],["CursorEntered","An event that is sent whenever the user’s cursor enters a window."],["CursorLeft","An event that is sent whenever the user’s cursor leaves a window."],["CursorMoved","An event reporting that the mouse cursor has moved inside a window."],["DebugName","Convenient query for giving a human friendly name to an entity."],["DefaultPlugins","This plugin group will add all the default plugins for a Bevy application:"],["Deferred","A [`SystemParam`] that stores a buffer which gets applied to the [`World`] at the end of a stage. This is used internally by `Commands` to defer `World` mutations."],["DescendantIter","An [`Iterator`] of [`Entity`]s over the descendants of an [`Entity`]."],["DespawnChildrenRecursive","Despawns the given entity’s children recursively"],["DespawnRecursive","Despawns the given entity and all its children recursively"],["DirectionalLight","A Directional light."],["DirectionalLightBundle","A component bundle for [`DirectionalLight`] entities."],["DynamicScene","A collection of serializable resources and dynamic entities."],["DynamicSceneBuilder","A [`DynamicScene`] builder, used to build a scene from a [`World`] by extracting some entities and resources."],["DynamicSceneBundle","A component bundle for a [`DynamicScene`] root."],["Entity","Lightweight identifier of an entity."],["EntityPath","Path to an entity, with [`Name`]s. Each entity in a path must have a name."],["EnvironmentMapLight","Environment map based ambient lighting representing light from distant scenery."],["EventReader","Reads events of type `T` in order and tracks which events have already been read."],["EventWriter","Sends events of type `T`."],["Events","An event collection that represents the events that occurred within the last two [`Events::update`] calls. Events can be written to using an [`EventWriter`] and are typically cheaply read using an [`EventReader`]."],["ExtractSchedule","Schedule which extract data from the main world and inserts it into the render world."],["First","Runs first in the schedule. This is run by the [`Main`] schedule."],["FixedTime","The amount of time that must pass before the fixed timestep schedule is run again."],["FixedUpdate","The schedule that contains systems which only run after a fixed period of time has elapsed."],["FogSettings","Configures the “classic” computer graphics distance fog effect, in which objects appear progressively more covered in atmospheric haze the further away they are from the camera. Affects meshes rendered via the PBR `StandardMaterial`."],["Font",""],["FrameCountPlugin","Adds frame counting functionality to Apps."],["Gamepad","A gamepad with an associated `ID`."],["GamepadAxis","An axis of a [`Gamepad`]."],["GamepadButton","A button of a [`Gamepad`]."],["Gamepads","A collection of connected [`Gamepad`]s."],["GilrsPlugin",""],["GlobalTransform","Describe the position of an entity relative to the reference frame."],["Handle","A handle into a specific [`Asset`] of type `T`."],["HandleUntyped","A non-generic version of [`Handle`]."],["Hermite","A spline interpolated continuously between the nearest two control points, with the position and velocity of the curve specified at both control points. This curve passes through all control points, with the specified velocity which includes direction and parametric speed."],["HierarchyPlugin","The base plugin for handling [`Parent`] and [`Children`] components"],["IVec2","A 2-dimensional vector."],["IVec3","A 3-dimensional vector."],["IVec4","A 4-dimensional vector."],["Image",""],["ImageBundle","A UI node that is an image"],["ImagePlugin","Adds the [`Image`] as an asset and makes sure that they are extracted and prepared for the GPU."],["In","Wrapper type to mark a [`SystemParam`] as an input."],["Input","A “press-able” input of type `T`."],["InsertChildren","Command that inserts a child at a given index of a parent’s children, shifting following children back"],["Label","Marker struct for labels"],["Last","Runs last in the schedule. This is run by the [`Main`] schedule."],["Local","A system local [`SystemParam`]."],["Main","The schedule that contains the app logic that is evaluated each tick of [`App::update()`]."],["Mat2","A 2x2 column major matrix."],["Mat3","A 3x3 column major matrix."],["Mat4","A 4x4 column major matrix."],["MaterialMeshBundle","A component bundle for entities with a [`Mesh`] and a [`Material`]."],["MaterialPlugin","Adds the necessary ECS resources and render logic to enable rendering entities using the given [`Material`] asset type."],["Mesh",""],["MinimalPlugins","This plugin group will add the minimal plugins for a Bevy application:"],["Mut","Unique mutable borrow of an entity’s component"],["Name","Component used to identify an entity. Stores a hash for faster comparisons."],["NextState","The next state of [`State<S>`]."],["Node","Describes the size of a UI node"],["NodeBundle","The basic UI node"],["NonSend","Shared borrow of a non-[`Send`] resource."],["NonSendMut","Unique borrow of a non-[`Send`] resource."],["OnEnter","The label of a `Schedule` that runs whenever [`State<S>`] enters this state."],["OnExit","The label of a `Schedule` that runs whenever [`State<S>`] exits this state."],["OnTransition","The label of a `Schedule` that only runs whenever [`State<S>`] exits the `from` state, AND enters the `to` state."],["OnUpdate","A [`SystemSet`] that will run within `CoreSet::Update` when this state is active."],["Or","A filter that tests if any of the given filters apply."],["OrthographicProjection","Project a 3D space onto a 2D surface using parallel lines, i.e., unlike [`PerspectiveProjection`], the size of objects remains the same regardless of their distance to the camera."],["ParallelCommands","An alternative to [`Commands`] that can be used in parallel contexts, such as those in `Query::par_iter`"],["ParamSet","A collection of potentially conflicting [`SystemParam`]s allowed by disjoint access."],["Parent","Holds a reference to the parent entity of this entity. This component should only be present on entities that actually have a parent entity."],["PerspectiveProjection","A 3D camera projection in which distant objects appear smaller than close objects."],["PlaybackSettings","Settings to control playback from the start."],["PointLight","A light that emits light in all directions from a central point."],["PointLightBundle","A component bundle for [`PointLight`] entities."],["PostStartup","The schedule that runs once after [`Startup`]. This is run by the [`Main`] schedule."],["PostUpdate","The schedule that contains logic that must run after [`Update`]. For example, synchronizing “local transforms” in a hierarchy to “global” absolute transforms. This enables the [`PostUpdate`] transform-sync system to react to “local transform” changes in [`Update`] without the [`Update`] systems needing to know about (or add scheduler dependencies for) the “global transform sync system”."],["PreStartup","The schedule that runs before [`Startup`]. This is run by the [`Main`] schedule."],["PreUpdate","The schedule that contains logic that must run before [`Update`]. For example, a system that reads raw keyboard input OS events into an `Events` resource. This enables systems in [`Update`] to consume the events from the `Events` resource without actually knowing about (or taking a direct scheduler dependency on) the “os-level keyboard event sytsem”."],["PushChildren","Command that pushes children to the end of the entity’s [`Children`]."],["Quat","A quaternion representing an orientation."],["Query","System parameter that provides selective access to the [`Component`] data stored in a [`World`]."],["QueryState","Provides scoped access to a [`World`] state according to a given [`WorldQuery`] and query filter."],["Ray","A ray is an infinite line starting at `origin`, going in `direction`."],["ReceivedCharacter","An event that is sent whenever a window receives a character from the OS or underlying system."],["Rect","A rectangle defined by two opposite corners."],["Ref","Shared borrow of an entity’s component with access to change detection. Similar to [`Mut`] but is immutable and so doesn’t require unique access."],["ReflectComponent","A struct used to operate on reflected [`Component`] of a type."],["ReflectDefault","A struct used to provide the default value of a type."],["ReflectDeserialize","A struct used to deserialize reflected instances of a type."],["ReflectResource","A struct used to operate on reflected [`Resource`] of a type."],["ReflectSerialize","A struct used to serialize reflected instances of a type."],["RemoveChildren","Command that removes children from an entity, and removes that child’s parent."],["RemoveParent","Command that removes the parent of an entity, and removes that entity from the parent’s [`Children`]."],["RemovedComponents","A [`SystemParam`] that grants access to the entities that had their `T` [`Component`] removed."],["ReplaceChildren","Command that clear all children from an entity. And replace with the given children."],["Res","Shared borrow of a [`Resource`]."],["ResMut","Unique mutable borrow of a [`Resource`]."],["ScanCode","The scan code of a `KeyboardInput`."],["Scene","To spawn a scene, you can use either:"],["SceneBundle","A component bundle for a [`Scene`] root."],["SceneSpawner",""],["Schedule","A collection of systems, and the metadata and executor needed to run them in a certain order under certain conditions."],["Schedules","Resource that stores [`Schedule`]s mapped to [`ScheduleLabel`]s."],["Shader","A shader, as defined by its [`ShaderSource`] and `ShaderStage` This is an “unprocessed” shader. It can contain preprocessor directives."],["Size","A 2-dimensional area defined by a width and height."],["SpatialAudioSink","Asset controlling the playback of a sound, or the locations of its listener and emitter."],["SpatialBundle","A [`Bundle`] with the following `Component`s:"],["SpotLight","A light that emits light in a given direction from a central point. Behaves like a point light in a perfectly absorbent housing that shines light only in a given direction. The direction is taken from the transform, and can be specified with `Transform::looking_at`."],["SpotLightBundle","A component bundle for spot light entities"],["Sprite",""],["SpriteBundle",""],["SpriteSheetBundle","A Bundle of components for drawing a single sprite from a sprite sheet (also referred to as a `TextureAtlas`)"],["StandardMaterial","A material with “standard” properties used in PBR lighting Standard property values with pictures here https://google.github.io/filament/Material%20Properties.pdf."],["Startup","The schedule that runs once when the app starts. This is run by the [`Main`] schedule."],["State","A finite-state machine whose transitions have associated schedules ([`OnEnter(state)`] and [`OnExit(state)`])."],["StateTransition","Runs state transitions. This is run by the [`Main`] schedule."],["Style","Describes the style of a UI node"],["TaskPoolOptions","Helper for configuring and creating the default task pools. For end-users who want full control, set up `TaskPoolPlugin`"],["TaskPoolPlugin","Setup of default task pools: `AsyncComputeTaskPool`, `ComputeTaskPool`, `IoTaskPool`."],["Text",""],["Text2dBundle","The bundle of components needed to draw text in a 2D scene via a 2D `Camera2dBundle`. Example usage."],["TextBundle","A UI node that is text"],["TextSection",""],["TextStyle",""],["TextureAtlas","An atlas containing multiple textures (like a spritesheet or a tilemap). Example usage animating sprite. Example usage loading sprite sheet."],["TextureAtlasBuilder","A builder which is used to create a texture atlas from many individual sprites."],["TextureAtlasSprite",""],["Time","A clock that tracks how much it has advanced (and how much real time has elapsed) since its previous update and since its creation."],["Timer","Tracks elapsed time. Enters the finished state once `duration` is reached."],["TouchInput","A touch input event."],["Touches","A collection of [`Touch`]es."],["Transform","Describe the position of an entity. If the entity has a parent, the position is relative to its parent position."],["TransformBundle","A [`Bundle`] of the [`Transform`] and [`GlobalTransform`] `Component`s, which describe the position of an entity."],["TransformPlugin","The base plugin for handling [`Transform`] components"],["TypeRegistrationPlugin","Registration of default types to the `TypeRegistry` resource."],["UVec2","A 2-dimensional vector."],["UVec3","A 3-dimensional vector."],["UVec4","A 4-dimensional vector."],["UiCameraConfig","Configuration for cameras related to UI."],["UiImage","The 2D texture displayed for this UI node"],["UiRect","A type which is commonly used to define margins, paddings and borders."],["UiScale","The current scale of the UI."],["Update","The schedule that contains app logic. This is run by the [`Main`] schedule."],["ValidParentCheckPlugin","Print a warning for each `Entity` with a `T` component whose parent doesn’t have a `T` component."],["VariableCurve","Describes how an attribute of a [`Transform`] should be animated."],["Vec2","A 2-dimensional vector."],["Vec3","A 3-dimensional vector."],["Vec4","A 4-dimensional vector with SIMD support."],["VisibilityBundle","A [`Bundle`] of the [`Visibility`] and [`ComputedVisibility`] `Component`s, which describe the visibility of an entity."],["Window","Define how a window will be created and how it will behave."],["WindowMoved","An event that is sent when a window is repositioned in physical pixels."],["WindowPlugin","A [`Plugin`] that defines an interface for windowing support in Bevy."],["WindowResizeConstraints","The size limits on a window."],["With","Filter that selects entities with a component `T`."],["Without","Filter that selects entities without a component `T`."],["World","Stores and exposes operations on entities, components, resources, and their associated metadata."],["WorldChildBuilder","Struct for adding children to an entity directly through the [`World`] for use in exclusive systems"]],"trait":[["AddAsset","[`App`] extension methods for adding new asset types."],["AudioSinkPlayback","Common interactions with an audio sink."],["BuildChildren","Trait defining how to build children"],["BuildChildrenTransformExt","Collection of methods similar to [`BuildChildren`], but preserving each entity’s [`GlobalTransform`]."],["BuildWorldChildren","Trait that defines adding children to an entity directly through the [`World`]"],["Bundle","The `Bundle` trait enables insertion and removal of [`Component`]s from an entity."],["Component","A data type that can be used to store data for an entity."],["Condition","A system that determines if one or more scheduled systems should run."],["CubicGenerator","Implement this on cubic splines that can generate a curve from their spline parameters."],["Decodable","A type implementing this trait can be converted to a [`rodio::Source`] type. It must be [`Send`] and [`Sync`], and usually implements [`Asset`] so needs to be [`TypeUuid`], in order to be registered. Types that implement this trait usually contain raw sound data that can be converted into an iterator of samples. This trait is implemented for [`AudioSource`]. Check the example `audio/decodable` for how to implement this trait on a custom type."],["DespawnRecursiveExt","Trait that holds functions for despawning recursively down the transform hierarchy"],["DetectChanges","Types that can read change detection information. This change detection is controlled by [`DetectChangesMut`] types such as [`ResMut`]."],["DetectChangesMut","Types that implement reliable change detection."],["DynamicPluginExt",""],["Event","A type that can be stored in an [`Events<E>`] resource You can conveniently access events using the [`EventReader`] and [`EventWriter`] system parameter."],["FromReflect","A trait that enables types to be dynamically constructed from reflected data."],["FromWorld","Creates an instance of the type this trait is implemented for using data from the supplied [World]."],["GetField","A convenience trait which combines fetching and downcasting of struct fields."],["GetTupleStructField","A convenience trait which combines fetching and downcasting of tuple struct fields."],["HierarchyQueryExt","An extension trait for [`Query`] that adds hierarchy related methods."],["IntoPipeSystem","An extension trait providing the [`IntoPipeSystem::pipe`] method to pass input from one system into the next."],["IntoSystem","Conversion trait to turn something into a [`System`]."],["IntoSystemConfigs","Types that can convert into a [`SystemConfigs`]."],["IntoSystemSet","Types that can be converted into a [`SystemSet`]."],["IntoSystemSetConfig","Types that can be converted into a [`SystemSetConfig`]."],["IntoSystemSetConfigs","Types that can convert into a [`SystemSetConfigs`]."],["Material","Materials are used alongside [`MaterialPlugin`] and `MaterialMeshBundle` to spawn entities that are rendered with a specific [`Material`] type. They serve as an easy to use high level way to render [`Mesh`] entities with custom shader logic."],["Plugin","A collection of Bevy app logic and configuration."],["PluginGroup","Combines multiple [`Plugin`]s into a single unit."],["Reflect","The core trait of `bevy_reflect`, used for accessing and modifying data dynamically."],["Resource","A type that can be inserted into a [`World`] as a singleton."],["States","Types that can define world-wide states in a finite-state machine."],["Struct","A trait used to power struct-like operations via reflection."],["System","An ECS system that can be added to a `Schedule`"],["SystemParamFunction","A trait implemented for all functions that can be used as [`System`]s."],["SystemSet","Types that identify logical groups of systems."],["TupleStruct","A trait used to power tuple struct-like operations via reflection."]],"type":[["ColorMesh2dBundle","A component bundle for entities with a `Mesh2dHandle` and a [`ColorMaterial`]."],["PbrBundle","A component bundle for PBR entities with a [`Mesh`] and a [`StandardMaterial`]."]]};