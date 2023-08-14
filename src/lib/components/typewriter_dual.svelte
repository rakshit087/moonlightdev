<script lang="ts">
  import { UserType, userType } from '$lib/store';
  import Typewriter from './typewriter.svelte';

  export let devText: string;
  export let orgText: string;
  export let customClasses: string;
</script>

<Typewriter {customClasses} text={$userType === UserType.DEVELOPER ? devText : orgText} />
