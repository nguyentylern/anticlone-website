<script lang="ts">
    import { enhance } from '$app/forms';
    import { Audio } from '$lib/components';
    import './survey.css';

    let age: number | null = $state(null);
    let initials: string | null = $state(null);

    let initials_expr = /^[a-zA-Z]{2}$/;

    import audio_1 from '$lib/assets/0044-3.mp3';

	import type { PageProps } from './$types';
    let { data, form }: PageProps = $props();
</script>

<svelte:head>
    <title>Anticlone&ndash;Survey</title>
    <meta name="description" content="A listening test survey for a research project by students at FCS Innovation Academy focused on preventing the cloning of voices by altering reference audio.">
</svelte:head>

<div class="wrapper survey">
    <header>
        <h1>Anticlone Survey</h1>
        <p>Hello, we are Tyler Nguyen and Hannah Lu, students at Innovation Academy and the principal investigators of the study, “Disruption of AI Voice Cloning” otherwise known as <a href="/">Anticlone</a>. The study is part of an IA Research and Pinnacle Project course offered by the Innovation Academy.
        <p>The purpose of the study being conducted is to create a program the processes vocal audio that reduces the quality of AI voice cloning model outputs when used as reference speaker audio without significantly changing the original vocal character. There are no direct benefits to the participants; however, the intent of the study is to build a comprehensive understanding of AI voice cloning with reference audio data and possible alterations to the audio file to impact the process.</p>
        <p>There are no foreseeable risks associated with this study and the investigator perceives no more than minimal risk from your involvement involved in this study. Participation consists of one session, lasting approximately ten to fifteen minutes in total, not including the completion of this form. These sessions will not be audio- or video-taped. Privacy and anonymity of the participants will be maintained throughout the collective process. The subject's participation and behavior will remain confidential. Participation is voluntary, and the subject has the right to opt out of the experiment at any time. The study will be conducted during mid to late March.</p>
        <p>The study's results will be used as part of the final communication for an IA Research class. The study's results are available to participants upon request to the investigators, <a href="mailto:tyler.n.innovation@gmail.com">Tyler Nguyen</a> and <a href="mailto:luhannah127@gmail.com">Hannah Lu</a> and the investigator's Research teacher, <a href="mailto:hollanda@fultonschools.org">Anna Holland</a>.</p>
        <p>Your time and participation in this research is very much appreciated.</p>
    </header>
    <main>
        <h2>Survey</h2>
        <form method="POST" use:enhance enctype="multipart/form-data">
            <div class="information">
                <h3>Information and Consent</h3>
                <p>By filling out this section, you provide your consent to participate in the following survey. If you are under the age of 18, you will be asked to type in the initials of your parent or guardian. By doing so, you assure that your parent or guardian approves of your participation in this survey. Input your parent or guardian's initials as two characters only. For example, "TN" or "HL" are valid.</p>
                <div>
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="name" required>
                    <p class="form-text">By inputting your name in the field above, you hereby provide your consent in the participation of the following survey and the usage of your responses within our research.</p>
                </div>
                <div>
                    <label for="age" class="form-label">Age</label>
                    <input type="number" class="form-control" name="age" id="age" min="1" bind:value={age} required>
                </div>
                <div>
                    <label for="name" class="form-label">Gender</label>
                    <select name="gender" id="gender" class="form-select" required>
                        <option value="none">Please select an option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer">Prefer not to answer</option>
                    </select>
                </div>
                {#if age != null && age < 18}
                    <div>
                        <label for="initials" class="form-label">Initials</label>
                        <input type="text" class="form-control" name="initials" id="initials" bind:value={initials}>
                        <p class="form-text">By inputting your parent or guardian's initials in the field above, you assure that your parent or guardian approves of your participation in this survey</p>
                    </div>
                {/if}
            </div>
            <div class="audio-group">
                <h3>Audio Pair 1</h3>
                <div class="audio-pair">
                    <div class="audio-wrapper">
                        <Audio src={audio_1} title="Audio 1"></Audio>
                    </div>
                    <div class="audio-wrapper">
                        <Audio src={audio_1} title="Audio 2"></Audio>
                    </div>
                </div>
                <select name="comp_1" id="comp_1" class="form-select" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p class="form-text">A rating of 1 indicates that the voices come from entirely different people. A rating of 5 indicates that the voices are from the same person under the same exact conditions.</p>
            </div>
            <div class="audio-group">
                <h3>Audio Pair 2</h3>
                <div class="audio-pair">
                    <div class="audio-wrapper">
                        <Audio src={audio_1} title="Audio 1"></Audio>
                    </div>
                    <div class="audio-wrapper">
                        <Audio src={audio_1} title="Audio 2"></Audio>
                    </div>
                </div>
                <select name="comp_2" id="comp_2" class="form-select" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p class="form-text">A rating of 1 indicates that the voices come from entirely different people. A rating of 5 indicates that the voices are from the same person under the same exact conditions.</p>
            </div>
            <div class="audio-group">
                <h3>Audio Pair 3</h3>
                <div class="audio-pair">
                    <div class="audio-wrapper">
                        <Audio src={audio_1} title="Audio 1"></Audio>
                    </div>
                    <div class="audio-wrapper">
                        <Audio src={audio_1} title="Audio 2"></Audio>
                    </div>
                </div>
                <select name="comp_3" id="comp_3" class="form-select" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p class="form-text">A rating of 1 indicates that the voices come from entirely different people. A rating of 5 indicates that the voices are from the same person under the same exact conditions.</p>
            </div>
            <div class="audio-group">
                <h3>Audio Pair 4</h3>
                <div class="audio-pair">
                    <div class="audio-wrapper">
                        <Audio src={audio_1} title="Audio 1"></Audio>
                    </div>
                    <div class="audio-wrapper">
                        <Audio src={audio_1} title="Audio 2"></Audio>
                    </div>
                </div>
                <select name="comp_4" id="comp_4" class="form-select" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p class="form-text">A rating of 1 indicates that the voices come from entirely different people. A rating of 5 indicates that the voices are from the same person under the same exact conditions.</p>
            </div>
            <div class="submission-wrapper">
                <h3>Submit</h3>
                <p>Before submitting, make sure that you have filled out each input. Responses that are not appropriately filled out will be discarded and not used in our research.</p>
                <button type="submit">Sumbit</button>
                {#if form?.success}
                    <p>Successfully completed form. Thank you for completing our survey.</p>
                {/if}
            </div>
        </form>
    </main>
</div>