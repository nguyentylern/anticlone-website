<script>
    import hero from '$lib/assets/hero-2.webp';
    import xcode from '$lib/assets/xcode.png';
    import ableton from '$lib/assets/ableton.png';
    import spectrogram_1 from '$lib/assets/spectrogram-1.png';
    import './landing.css';
</script>

<svelte:head>
    <title>Anticlone</title>
    <meta name="description" content="A research project by students at FCS Innovation Academy focused on preventing the cloning of voices by altering reference audio.">
</svelte:head>


<header style="
    height: 100svh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background-position: center;
    background-size: cover;
">
    <div class="hero-text" style="
        width: calc(100% - 2rem);
        margin-inline: auto;
        padding-bottom: 1rem;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
    ">
        <svg width="524" height="97" viewBox="0 0 524 97" fill="none" xmlns="http://www.w3.org/2000/svg" style="
            mix-blend-mode: difference;
            max-height: 100svh;
            position: sticky;
            top: 1rem;
        ">
            <title>ANTICLONE</title>
            <path d="M2.61604 95C1.46405 95 0.696045 94.616 0.696045 93.72C0.696045 92.824 1.33605 92.312 2.48804 92.056L4.40805 91.672C7.73605 91.032 9.27205 88.344 10.424 83.608L30.264 3.60798C30.648 1.94398 31.544 1.55998 32.184 1.55998C32.952 1.55998 33.848 1.94398 34.232 3.60798L54.456 84.76C55.608 89.496 56.76 91.032 60.088 91.672L62.008 92.056C63.16 92.312 63.8 92.824 63.8 93.72C63.8 94.616 63.032 95 61.88 95H39.992C38.84 95 38.2 94.488 38.2 93.592C38.2 92.824 38.84 92.184 40.376 92.056L42.808 91.8C45.752 91.544 46.392 90.136 45.496 86.424L40.632 66.584C40.12 64.408 38.712 63.256 36.408 63.256H22.968C20.664 63.256 19.384 64.28 18.744 66.584L14.392 83.736C13.112 88.6 14.264 91.288 18.232 91.8L20.152 92.056C21.688 92.312 22.328 92.824 22.328 93.592C22.328 94.488 21.688 95 20.536 95H2.61604ZM22.584 59.416H36.664C37.944 59.416 38.584 58.52 38.328 57.24L30.136 22.936H29.496L20.92 57.24C20.664 58.52 21.304 59.416 22.584 59.416Z" fill="white"/>
            <path d="M115.162 96.152C113.498 96.152 112.73 95.384 111.706 93.08L77.018 17.816C76.506 16.664 75.482 16.92 75.482 18.2V83.992C75.482 88.856 76.89 91.16 81.114 91.8L82.778 92.056C83.93 92.184 84.442 92.824 84.442 93.592C84.442 94.488 83.802 95 82.522 95H64.218C62.938 95 62.298 94.488 62.298 93.592C62.298 92.824 62.81 92.184 63.962 92.056L65.626 91.8C70.106 91.16 71.514 88.856 71.514 83.992V11.288C71.514 7.70398 70.746 6.93598 66.906 6.29598L63.962 5.78398C62.81 5.52798 62.298 5.01598 62.298 4.24798C62.298 3.35198 62.938 2.83998 64.218 2.83998H77.914C80.09 2.83998 81.498 3.60798 82.394 5.65598L112.602 72.088C113.114 73.112 114.138 72.856 114.138 71.832V13.848C114.138 8.47198 112.09 6.67998 109.146 6.16798L106.842 5.78398C105.69 5.52798 105.178 5.01598 105.178 4.24798C105.178 3.35198 105.818 2.83998 107.098 2.83998H125.402C126.682 2.83998 127.322 3.35198 127.322 4.24798C127.322 5.01598 126.81 5.65598 125.658 5.78398L123.994 6.03998C119.514 6.67998 118.106 8.47198 118.106 13.848V92.056C118.106 95.128 116.826 96.152 115.162 96.152Z" fill="white"/>
            <path d="M144.479 95C143.199 95 142.559 94.488 142.559 93.592C142.559 92.824 143.071 92.184 144.223 92.056L149.983 91.16C153.311 90.648 154.335 89.752 154.335 86.168V9.36798C154.335 6.93598 153.567 6.03998 150.367 6.03998C143.967 6.03998 136.799 11.16 135.007 23.32L134.367 27.544C134.239 28.568 133.599 29.208 132.575 29.208C131.551 29.208 130.783 28.44 130.911 27.032L132.063 3.86398C132.191 1.94398 132.959 0.919983 134.367 0.919983C136.031 0.919983 136.415 2.83998 144.607 2.83998H173.151C181.343 2.83998 181.727 0.919983 183.391 0.919983C184.799 0.919983 185.567 1.94398 185.695 3.86398L186.847 27.032C186.975 28.44 186.207 29.208 185.183 29.208C184.159 29.208 183.519 28.568 183.391 27.544L182.751 23.32C180.959 11.16 173.791 6.03998 167.391 6.03998C164.191 6.03998 163.423 6.93598 163.423 9.36798V86.168C163.423 89.752 164.447 90.648 167.775 91.16L173.535 92.056C174.687 92.184 175.199 92.824 175.199 93.592C175.199 94.488 174.559 95 173.279 95H144.479Z" fill="white"/>
            <path d="M192.727 95C191.447 95 190.807 94.488 190.807 93.592C190.807 92.824 191.319 92.312 192.471 92.056L195.415 91.544C198.999 90.904 199.767 90.136 199.767 86.552V11.288C199.767 7.70398 198.999 6.93598 195.415 6.29598L192.471 5.78398C191.319 5.52798 190.807 5.01598 190.807 4.24798C190.807 3.35198 191.447 2.83998 192.727 2.83998H215.895C217.175 2.83998 217.815 3.35198 217.815 4.24798C217.815 5.01598 217.303 5.52798 216.151 5.78398L213.207 6.29598C209.623 6.93598 208.855 7.70398 208.855 11.288V86.552C208.855 90.136 209.623 90.904 213.207 91.544L216.151 92.056C217.303 92.312 217.815 92.824 217.815 93.592C217.815 94.488 217.175 95 215.895 95H192.727Z" fill="white"/>
            <path d="M256.858 96.152C237.914 96.152 225.37 77.464 225.37 48.408C225.37 20.248 239.45 1.55998 257.242 1.55998C264.154 1.55998 269.402 2.96798 273.498 5.01598C274.65 5.65598 275.034 6.29598 275.034 7.70398L275.418 27.16C275.418 28.568 274.906 29.336 273.882 29.336C272.858 29.336 272.346 28.824 272.09 27.672L270.81 22.936C267.226 9.62398 262.618 5.27198 256.218 5.27198C244.314 5.27198 235.354 20.504 235.354 48.408C235.354 77.208 245.594 92.44 256.346 92.44C264.026 92.44 268.25 88.728 271.578 75.032L273.114 68.76C273.37 67.608 274.138 66.968 275.162 67.096C276.058 67.224 276.57 67.864 276.57 69.272L276.058 90.008C276.058 91.416 275.546 92.056 274.394 92.696C270.298 94.744 265.05 96.152 256.858 96.152Z" fill="white"/>
            <path d="M286.102 95C284.822 95 284.182 94.488 284.182 93.592C284.182 92.824 284.694 92.312 285.846 92.056L288.79 91.544C292.374 90.904 293.142 90.136 293.142 86.552V11.288C293.142 7.70398 292.374 6.93598 288.79 6.29598L285.846 5.78398C284.694 5.52798 284.182 5.01598 284.182 4.24798C284.182 3.35198 284.822 2.83998 286.102 2.83998H309.526C310.806 2.83998 311.446 3.35198 311.446 4.37598C311.446 5.14398 310.934 5.65598 310.038 5.78398L306.582 6.29598C302.998 6.80798 302.23 7.83198 302.23 11.416V83.096C302.23 89.24 306.198 91.8 311.446 91.8C317.334 91.8 324.502 89.24 327.062 76.056L328.726 67.48C328.982 66.456 329.622 65.816 330.646 65.816C331.542 65.816 332.31 66.584 332.182 67.992L330.646 92.056C330.518 93.976 329.366 95 327.446 95H286.102Z" fill="white"/>
            <path d="M367.435 96.152C350.923 96.152 337.995 75.416 337.995 48.792C337.995 22.296 350.923 1.55998 367.435 1.55998C383.819 1.55998 396.875 22.296 396.875 48.792C396.875 75.416 383.819 96.152 367.435 96.152ZM367.435 92.696C379.467 92.696 386.763 78.36 386.763 48.792C386.763 19.352 379.467 5.01598 367.435 5.01598C355.403 5.01598 348.107 19.352 348.107 48.792C348.107 78.36 355.403 92.696 367.435 92.696Z" fill="white"/>
            <path d="M455.912 96.152C454.248 96.152 453.48 95.384 452.456 93.08L417.768 17.816C417.256 16.664 416.232 16.92 416.232 18.2V83.992C416.232 88.856 417.64 91.16 421.864 91.8L423.528 92.056C424.68 92.184 425.192 92.824 425.192 93.592C425.192 94.488 424.552 95 423.272 95H404.968C403.688 95 403.048 94.488 403.048 93.592C403.048 92.824 403.56 92.184 404.712 92.056L406.376 91.8C410.856 91.16 412.264 88.856 412.264 83.992V11.288C412.264 7.70398 411.496 6.93598 407.656 6.29598L404.712 5.78398C403.56 5.52798 403.048 5.01598 403.048 4.24798C403.048 3.35198 403.688 2.83998 404.968 2.83998H418.664C420.84 2.83998 422.248 3.60798 423.144 5.65598L453.352 72.088C453.864 73.112 454.888 72.856 454.888 71.832V13.848C454.888 8.47198 452.84 6.67998 449.896 6.16798L447.592 5.78398C446.44 5.52798 445.928 5.01598 445.928 4.24798C445.928 3.35198 446.568 2.83998 447.848 2.83998H466.152C467.432 2.83998 468.072 3.35198 468.072 4.24798C468.072 5.01598 467.56 5.65598 466.408 5.78398L464.744 6.03998C460.264 6.67998 458.856 8.47198 458.856 13.848V92.056C458.856 95.128 457.576 96.152 455.912 96.152Z" fill="white"/>
            <path d="M474.477 95C473.197 95 472.557 94.488 472.557 93.592C472.557 92.824 473.069 92.312 474.221 92.056L477.165 91.544C480.749 90.904 481.517 90.136 481.517 86.552V11.288C481.517 7.70398 480.749 6.93598 477.165 6.29598L474.221 5.78398C473.069 5.52798 472.557 5.01598 472.557 4.24798C472.557 3.35198 473.197 2.83998 474.477 2.83998H517.485C519.405 2.83998 520.557 3.86398 520.685 5.78398L521.709 27.032C521.837 28.44 521.069 29.208 520.045 29.208C519.021 29.208 518.381 28.568 518.253 27.544L517.485 22.808C515.565 11.288 509.933 6.03998 499.693 6.03998C492.781 6.03998 490.605 7.83198 490.605 12.696V43.544C490.605 44.696 491.245 45.336 492.397 45.336H498.797C502.637 45.336 504.813 43.544 505.709 39.32L506.989 32.92C507.245 31.896 508.141 31.128 509.165 31.256C510.061 31.384 510.573 32.024 510.573 33.432V62.232C510.573 63.64 510.061 64.28 509.165 64.408C508.141 64.536 507.245 63.768 506.989 62.744L505.709 56.472C504.557 50.584 502.509 49.176 498.669 49.176H492.397C491.245 49.176 490.605 49.816 490.605 50.968V83.096C490.605 89.24 493.293 91.8 501.613 91.8C510.189 91.8 516.461 88.216 518.893 76.312L520.429 68.76C520.685 67.736 521.325 67.096 522.349 67.096C523.245 67.096 524.013 67.864 523.885 69.272L522.605 92.056C522.477 93.976 521.325 95 519.405 95H474.477Z" fill="white"/>
        </svg>
    </div>
    <div class="hero-img" style="
        width: 100%;
        height: 100%;
        background-image: url({hero});
        background-size: cover;
        background-position: center;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        image-rendering: pixelated;
        object-fit: cover;
        image-rendering: pixelated;
    "></div>
</header>
<div class="content">
    <aside>
        <div class="nav">
            <h2>Directory</h2>
            <nav>
                <ul role="list">
                    <li><a href="/#introduction">Introduction</a></li>
                    <li><a href="/#background">Background</a></li>
                    <li><a href="/#product">Product</a></li>
                    <li><a href="/#methods">Methods</a></li>
                    <li><a href="/#investigation-results">Investigation and Results</a></li>
                    <li><a href="/#limitations">Limitations</a></li>
                </ul>
            </nav>
        </div>
    </aside>
    <main style="width: min(100%, 60ch);">
        <section>
            <h2 id="introduction">Introduction</h2>
            <p>Anticlone is a research project by Hannah Lu and Tyler Nguyen, students at FCS Innovation Academy in Alpharetta, Georgia. (You can read more about us below.) We were driven to create this research project by the rise of modern machine learning technologies that can clone human voices, converting a person's voice into another or generating speech. We believed that the implications can be dangerous, and there have been examples where such technology has negatively impacted people: artifical speech was used to frame a school principal of racist speech <a href="https://apnews.com/article/ai-maryland-principal-voice-recording-663d5bc0714a3af221392cc6f1af985e">[1]</a>, and artifical speech of Joe Biden was used to discourage Democrats from voting <a href="https://www.npr.org/2024/05/23/nx-s1-4977582/fcc-ai-deepfake-robocall-biden-new-hampshire-political-operative">[2]</a>.</p>
            <ul role="list" class="image-carousel">
                <li>
                    <img src="https://dims.apnews.com/dims4/default/7d044b9/2147483647/strip/true/crop/6048x4024+0+0/resize/1440x958!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2e%2Fa2%2Fdee54a6efdb10c8590c36d513aa0%2Ff23d0ce3c6174aa9b35facf21ef763d4" alt="Baltimore County Police Chief Robert McCullough and other local officials speak at a news conference in Towson, Md., April 25, 2024. The most recent criminal case to involve artificial intelligence has emerged from a high school in Baltimore County, Maryland. That's where police say a principal was framed by a fake recording of his voice. (Kim Hairston/The Baltimore Sun via AP). Caption sourced from reference 1.">
                </li>
                <li>
                    <img src="https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5333x4000+333+0/resize/1600/quality/85/format/webp/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F2d%2F60%2Fb9ef575c4554a041cf8972f7f48b%2Fgettyimages-1955393469.jpg" alt="Voters filling out their ballots on Jan. 23 in Loudon, N.H. A political consultant faces charges in New Hampshire and steep fines from the Federal Communications Commission for creating a robocall ahead of that state's presidential primary featuring a cloned version of President Biden's voice, urging people not to vote in the primary. Caption sourced from reference 2.">
                </li>
            </ul>
            <p>Thus, we wanted to research a way that could degrade the quality of the outputs of speech generative machine learning algorithms. In particular, we wanted to do this by altering the reference audio of a speaker used to clone a voice, and this idea was inspired by the <a href="https://glaze.cs.uchicago.edu/">Glaze</a> and <a href="https://nightshade.cs.uchicago.edu/">Nightshade</a> projects that do something similar but with image generators. Based on these ideas, we created the following research question.</p>
            <p class="research-question"><span>Research Question</span> <span>How can audio data be altered to disrupt the quality of outputs from audio generative machine learning models?</span></p>
            <p>We also constructed some goals that we wanted to reach with our solution: the change to the reference audio should be virtually imperceptible, the output from a speech-generating model using our processed audio should be noticably worse in quality compared to an output produced using non-processed audio. These goals are also inspired by Glaze and Nightshade's functionality.</p>
            <p>From here, we began our <a href="/#background">initial background research</a>.</p>
            <h3>Our Background</h3>
            <div class="our-background">
                <div>
                    <h4>Hannah Lu</h4>
                    <p>Hannah Lu is a junior at FCS Innovation Academy. She majors in the IT pathway and enrolls in both the computer science and cybersecurity sub-pathways. She has experience with HTML, CSS Python, SQL, and Java.</p>
                </div>
                <div>
                    <h4>Tyler Nguyen</h4>
                    <p>Tyler Nguyen is a junior at FCS Innovation Academy. He majors in the IT pathway under the computer science sub-pathway. He has experience with HTML, CSS, JavaScript, Python, and Java. He also has experience with music including music theory and music technology.</p>
                </div>
                <p>We are both enrolled in Anna Holland's Honor's Research class with a Fine Arts Focus.</p>
            </div>
        </section>
        <section>
            <h2 id="background">Background</h2>
            <p>We began our background research with how speech-generating machine learning models worked. We investigated the research behind several models as well as the methods for creating such models. We found that the models are usually trained on audio data not in the form of raw, uncompressed audio file, but in the form of spectrograms, graphs that plot the amplitude of frequency ranges over time. One source also discussed audio watermarking, the act of altering the frequency information of some audio in a specific pattern, that could be not-hearable by humans but would affect the training of machine learning models. This expanded the possibilities of what we could implement for our product.</p>
            <p>Overall, we found that subtle alterations made to the frequency domain of audio would be most feasible given our technical knowledge and what we had learned from the sources we collected. It is possible that time-based alterations could be performed without altering speaker-recognition and speaker-similarity, but such an implementation would be complex beyond our technical capabilities. In addition, most sources, through their discussion of spectrograms, highlighted the importance of frequency information to generating speech and cloning voices (this makes sense considering our existing knowledge of timbre).</p>
            <ul role="list" class="image-carousel">
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Spectrogram-19thC.png" alt="A spectrogram, showing time on the x-axis, frequency on the y-axis, and color representing the amplitude of a frequency region within a time region.">
                </li>
                <li>
                    <img src={spectrogram_1} alt="A screenshot of Figure 2 from the source by Malik and Changalvala, referenced in the first document blow. It shows two spectrograms, one of real speech and one of synthesized speech. It highlights discrepancies seen in the spectrogram of the synthesized speech." style="border: 1px solid var(--clr-foreground);">
                </li>
            </ul>
            <p>Read through our initial research of twenty sources pertaining to machine learning with a focus on speech-generation <a href="https://hatslhxtyerikghdqeyk.supabase.co/storage/v1/object/public/research//15-sources-background-research.pdf">here</a>.</p>
            <p>Read our annotated bibliography of background research <a href="https://hatslhxtyerikghdqeyk.supabase.co/storage/v1/object/public/research//background-annotated-bibliography.pdf">here</a>.</p>
        </section>
        <section>
            <h2 id="product">Product</h2>
            <p>Our product is a console application developed in the C++ programming language using the JUCE audio processing framework. The program takes in an input <code>.wav</code> file and performs transformations on the audio data and outputs a new <code>.wav</code> file. The program first loads the input file into a buffer. Then, the fast fourier transform is applied to the signal, allowing the spectral component of the audio to be modified. The program then selects frequency bins above 2400 hertz and randomly alters each bin's frequency in conjuction with an adjacent bin. This creates subtle changes in the upper frequencies of a voice. After the frequency bins are processed, the program performs the inverse fast fourier transform and loads that audio into the output buffer. The output buffer is then normalized and written to a file on the disk.</p>
            <ul role="list" class="image-carousel">
                <li>
                    <img src={xcode} alt="A screenshot of the Xcode environment where the program was developed.">
                </li>
                <li>
                    <img src={ableton} alt="A screenshot of an Ableton Live project where a piece of original audio and a piece of altered audio are being compared.">
                </li>
            </ul>
        </section>
        <section>
            <h2 id="methods">Research Methods</h2>
            <p>To conduct our research on our product, we will be conducting listening test survey's that compare several pairs of audio. The surveys will occur through a digital interface on another webpage of this site, and the participants will be able to complete the test using their own listening equipment and in a common environment. This will help reproduce the scenarios in which people online may encounter artificially generated speech, so by allowing the participants to test under their own circumstances, we can replicate testing environments representative of the real world.</p>
            <p>On the page, we will explain the project and the concerns that go along with participating in a research project. Participants wil be required to submit informed consent forms, and participants under the age of 18 will also have show a parent or guardian signature approving their participation in the study. The participants will submit their name, age, gender, and their responses to four pairs of audio files. Each audio file will contain approximately thirty seconds of vocal audio. The audios will be of four types:</p>
            <ul class="normal-list">
                <li>original audio (OA: audio that has not been processed by our product),</li>
                <li>altered audio (AA: audio that <em>has</em> been processed by oru product),</li>
                <li>original audio output (OAO: audio synthesized by a voice cloning model with OA as the reference audio),</li>
                <li>and altered audio outupt (AAO: audio synthesized by a voice cloning model with AA as the reference audio).</li>
            </ul>
            <p>With these types of audios, the following comparisons will be made by each participant (they will not know which audio is what type): (A) OA versus AA, (B) OA versus OAO, (C) AA versus AAO, and (D) OAO versus AAO. These comparisons will be made upon a scale from 1 to 5, 1 indicating that the voices are from completely different people, and 5 indicating that the voices are from the same person under the same conditions.</p>
            <p>Once a participant has submitted their response, their consent form will be validated by us, and if it is invalid, their response will not be considered. Once the testing window has passed, the responses will be collected into tabular data to be analyzed. One part of the analysis will be creating a mean opinion score (MOS) for each comparison. A high score for comparison A will indicate that our first goal has been met. A significant difference between the MOSs for comparisons B and C will indicate a degradation in the quality of the output correlated with our processing, and a low MOS for comparison D will indicate the same.</p>
            <p>Read our annotated bibliography of research methods and methodologies <a href="https://hatslhxtyerikghdqeyk.supabase.co/storage/v1/object/public/research//methods-annotated-bibliography.pdf">here</a>.</p>
        </section>
        <section>
            <h2 id="investigation-results">Investigation and Results</h2>
            <h3>Investigation</h3>
            <p>To be completed. Complete our listening test survey <a href="/survey">here</a> to contribute to our research.</p>
            <h3>Results</h3>
            <p>Results not yet obtained nor analyzed.</p>
        </section>
        <section>
            <h2 id="limitations">Limitations</h2>
            <p>To be completed.</p>
        </section>
    </main>
    <div class="space"></div>
</div>