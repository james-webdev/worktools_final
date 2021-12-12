import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="ml-20 mr-20 mt-10 mb-10">
        <div className="mt-8">
          <h1 className="mt-8">TERMS</h1>
          <p className="mt-5">
            By accessing the website at <a href="http://work.tools">http://work.tools</a>, you are
            agreeing to be bound by these terms of service, all applicable laws and regulations, and
            agree that you are responsible for compliance with any applicable local laws. If you do
            not agree with any of these terms, you are prohibited from using or accessing this site.
            The materials contained in this website are protected by applicable copyright and
            trademark law.
          </p>
          <h1 className="mt-8">USE LICENSE</h1>
          <p className="mt-5">
            Permission is granted to temporarily download one copy of the materials (information or
            software) on DeskServe LTD’s website for personal, non-commercial transitory viewing
            only. This is the grant of a license, not a transfer of title, and under this license
            you may not: modify or copy the materials; use the materials for any commercial purpose,
            or for any public display (commercial or non-commercial); attempt to decompile or
            reverse engineer any software contained on DeskServe LTD’s website; remove any copyright
            or other proprietary notations from the materials; or transfer the materials to another
            person or “mirror” the materials on any other server. This license shall automatically
            terminate if you violate any of these restrictions and may be terminated by DeskServe
            LTD at any time. Upon terminating your viewing of these materials or upon the
            termination of this license, you must destroy any downloaded materials in your
            possession whether in electronic or printed format.
          </p>
          <h1 className="mt-8">DISCLAIMER</h1>
          <p className="mt-5">
            The materials on DeskServe LTD’s website are provided on an ‘as is’ basis. DeskServe LTD
            makes no warranties, expressed or implied, and hereby disclaims and negates all other
            warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights. Further, DeskServe LTD does not warrant or make
            any representations concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such materials or on any sites
            linked to this site.
          </p>
          <h1 className="mt-8">LIMITATIONS</h1>
          <p>
            In no event shall DeskServe LTD or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on DeskServe LTD’s website,
            even if DeskServe LTD or a DeskServe LTD authorized representative has been notified
            orally or in writing of the possibility of such damage. Because some jurisdictions do
            not allow limitations on implied warranties, or limitations of liability for
            consequential or incidental damages, these limitations may not apply to you. ACCURACY OF
            MATERIALS The materials appearing on DeskServe LTD website could include technical,
            typographical, or photographic errors. DeskServe LTD does not warrant that any of the
            materials on its website are accurate, complete or current. DeskServe LTD may make
            changes to the materials contained on its website at any time without notice. However
            DeskServe LTD does not make any commitment to update the materials.
          </p>
          <h1 className="mt-8">LINKS</h1>
          <p className="mt-5">
            DeskServe LTD has not reviewed all of the sites linked to its website and is not
            responsible for the contents of any such linked site. The inclusion of any link does not
            imply endorsement by DeskServe LTD of the site. Use of any such linked website is at the
            user’s own risk.
          </p>
          <h1 className="mt-8">MODIFICATIONS</h1>
          <p className="mt-5">
            DeskServe LTD may revise these terms of service for its website at any time without
            notice. By using this website you are agreeing to be bound by the then current version
            of these terms of service. GOVERNING LAW These terms and conditions are governed by and
            construed in accordance with the laws of United Kingdom and you irrevocably submit to
            the exclusive jurisdiction of the courts in that location.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
