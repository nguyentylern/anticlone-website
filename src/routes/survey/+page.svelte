<script lang="ts">
    import { enhance } from '$app/forms';
    import { Audio } from '$lib/components';
    import './survey.css';

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
        <p style="text-align: justify;">This is a listening test survey for our research project Anticlone. By completing this survey, you're responses will be used within our research to evaluate the performance of our product. You can visit our design portfolio <a href="/">here</a>.</p>
    </header>
    <main>
        <h2>Survey</h2>
        <form method="POST" use:enhance enctype="multipart/form-data">
            <div class="information">
                <h3>Information</h3>
                <p>To complete this survey, you must fill out <a href="/">this consent form</a>, and if you are a minor, you must secure the signature of a parent of guardian. Please complete the form and submit it as a <code class="file-format">.jpeg</code>, <code class="file-format">.png</code>, or <code class="file-format">.pdf</code> file below.</p>
                <div>
                    <label for="consent_form" class="form-label">Consent Form</label>
                    <input type="file" class="form-control" id="consent_form" name="consent_form" aria-label="Consent form input" accept="image/jpeg, image/png, application/pdf" required>
                </div>
                <div>
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="name" required>
                </div>
                <div>
                    <label for="age" class="form-label">Age</label>
                    <input type="number" class="form-control" name="age" id="age" min="1" required>
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
                <p>Before submitting, make sure that you have filled out each input.</p>
                <button type="submit" disabled>Sumbission Disabled</button>
                {#if form?.success}
                    <p>Successfully completed form. Thank you for completing our survey.</p>
                {/if}
            </div>
        </form>
    </main>
</div>