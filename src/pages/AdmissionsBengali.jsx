import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  GraduationCap, 
  Calendar, 
  FileText, 
  DollarSign, 
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Download,
  Award,
  Clock,
  Users
} from 'lucide-react'
import { CONTACT_INFO } from '../config/siteContent'

export default function AdmissionsBengali() {
  const admissionSteps = [
    {
      step: "১",
      title: "আবেদনপত্র পূরণ করুন",
      description: "অনলাইন বা অফলাইন আবেদনপত্র সংগ্রহ করে সম্পূর্ণ তথ্য সহ পূরণ করুন"
    },
    {
      step: "২",
      title: "প্রয়োজনীয় কাগজপত্র জমা দিন",
      description: "এসএসসি ও এইচএসসি সার্টিফিকেট, ছবি এবং অন্যান্য কাগজপত্র জমা দিন"
    },
    {
      step: "৩",
      title: "ভর্তি পরীক্ষা দিন",
      description: "নির্ধারিত তারিখে ভর্তি পরীক্ষায় অংশগ্রহণ করুন"
    },
    {
      step: "৪",
      title: "ফলাফল দেখুন",
      description: "পরীক্ষার ফলাফল ওয়েবসাইট এবং নোটিশ বোর্ডে প্রকাশিত হবে"
    },
    {
      step: "৫",
      title: "ভর্তি সম্পন্ন করুন",
      description: "ফি প্রদান করে চূড়ান্ত ভর্তি সম্পন্ন করুন"
    }
  ]

  const programs = [
    {
      name: "স্নাতক কোর্স (অনার্স)",
      duration: "৪ বছর",
      streams: ["বিজ্ঞান", "বাণিজ্য", "কলা"],
      seats: "৫০০+"
    },
    {
      name: "ডিপ্লোমা কোর্স",
      duration: "১-২ বছর",
      streams: ["কম্পিউটার সায়েন্স", "ব্যবসায় ব্যবস্থাপনা", "হিসাববিজ্ঞান"],
      seats: "২০০+"
    }
  ]

  const requiredDocuments = [
    "এসএসসি পাশের সার্টিফিকেট ও মার্কশীট",
    "এইচএসসি পাশের সার্টিফিকেট ও মার্কশীট",
    "জাতীয় পরিচয়পত্র বা জন্মনিবন্ধন সনদ",
    "পাসপোর্ট সাইজ ছবি (৪ কপি)",
    "অভিভাবকের জাতীয় পরিচয়পত্রের ফটোকপি",
    "স্থানান্তর সনদপত্র (প্রযোজ্য ক্ষেত্রে)"
  ]

  const fees = [
    {
      program: "স্নাতক (অনার্স) - বিজ্ঞান",
      admission: "৳৫,০০০",
      semester: "৳১৫,০০০",
      total: "৳১,২৫,০০০ (৪ বছর)"
    },
    {
      program: "স্নাতক (অনার্স) - বাণিজ্য/কলা",
      admission: "৳৪,০০০",
      semester: "৳১২,০০০",
      total: "৳১,০০,০০০ (৪ বছর)"
    },
    {
      program: "ডিপ্লোমা কোর্স",
      admission: "৳৩,০০০",
      semester: "৳৮,০০০",
      total: "৳৩৫,০০০ (২ বছর)"
    }
  ]

  const scholarships = [
    {
      name: "মেধাবৃত্তি",
      amount: "১০০% পর্যন্ত",
      criteria: "এসএসসি ও এইচএসসিতে জিপিএ ৫.০"
    },
    {
      name: "আর্থিক সহায়তা",
      amount: "২৫-৭৫%",
      criteria: "পারিবারিক আয় ৩০,০০০ টাকার নিচে"
    },
    {
      name: "ক্রীড়া বৃত্তি",
      amount: "৩০-৫০%",
      criteria: "জাতীয়/জেলা পর্যায়ে সাফল্য"
    }
  ]

  const importantDates = [
    {
      event: "আবেদন শুরু",
      date: "১ জুলাই, ২০২৬",
      icon: Calendar
    },
    {
      event: "আবেদনের শেষ তারিখ",
      date: "৩১ জুলাই, ২০২৬",
      icon: Clock
    },
    {
      event: "ভর্তি পরীক্ষা",
      date: "১৫ আগস্ট, ২০২৬",
      icon: FileText
    },
    {
      event: "ফলাফল প্রকাশ",
      date: "২৫ আগস্ট, ২০২৬",
      icon: Award
    },
    {
      event: "ক্লাস শুরু",
      date: "১ সেপ্টেম্বর, ২০২৬",
      icon: GraduationCap
    }
  ]

  return (
    <>
      <Helmet>
        <title>ভর্তি তথ্য - আউসনারা কলেজ</title>
        <meta name="description" content="আউসনারা কলেজে ভর্তি সংক্রান্ত সকল তথ্য। স্নাতক ও ডিপ্লোমা কোর্সে ভর্তির প্রক্রিয়া, যোগ্যতা, ফি এবং গুরুত্বপূর্ণ তারিখ সম্পর্কে জানুন।" />
        <meta name="keywords" content="আউসনারা কলেজ ভর্তি, বাংলাদেশ কলেজ ভর্তি, অনার্স ভর্তি, ডিপ্লোমা কোর্স, শিক্ষাবৃত্তি" />
        <link rel="canonical" href="https://aushnaracollege.edu.bd/admissions-bengali" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ভর্তি তথ্য - আউসনারা কলেজ" />
        <meta property="og:description" content="স্নাতক ও ডিপ্লোমা কোর্সে ভর্তি চলছে। বিস্তারিত জানুন এবং আবেদন করুন।" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="bn_BD" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <GraduationCap className="w-4 h-4" />
              <span>শিক্ষাবর্ষ ২০২৬-২০২৭</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              ভর্তি চলছে
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              আউসনারা কলেজে স্নাতক ও ডিপ্লোমা কোর্সে ভর্তির জন্য আবেদন করুন। মানসম্মত শিক্ষা, অভিজ্ঞ শিক্ষক এবং আধুনিক সুযোগ-সুবিধা।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                <FileText className="w-5 h-5" />
                এখনই আবেদন করুন
              </Link>
              <a 
                href="#process"
                className="inline-flex items-center justify-center gap-2 bg-blue-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/30 transition-all border border-white/20"
              >
                ভর্তি প্রক্রিয়া দেখুন
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">৭০০+</div>
              <div className="text-gray-600">আসন সংখ্যা</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">১০+</div>
              <div className="text-gray-600">বিষয়ের পছন্দ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">৪৫%</div>
              <div className="text-gray-600">শিক্ষাবৃত্তি</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">৯৫%</div>
              <div className="text-gray-600">সফলতার হার</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              উপলব্ধ কোর্স সমূহ
            </h2>
            <p className="text-xl text-gray-600">
              আপনার ক্যারিয়ারের জন্য সঠিক কোর্স বেছে নিন
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{program.seats} আসন</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="font-semibold text-gray-900 mb-2">বিভাগ সমূহ:</div>
                  <div className="flex flex-wrap gap-2">
                    {program.streams.map((stream, idx) => (
                      <span key={idx} className="bg-white px-4 py-2 rounded-lg text-gray-700 border border-blue-200">
                        {stream}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ভর্তি প্রক্রিয়া
            </h2>
            <p className="text-xl text-gray-600">
              সহজ ৫টি ধাপে ভর্তি সম্পন্ন করুন
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {admissionSteps.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              গুরুত্বপূর্ণ তারিখ
            </h2>
            <p className="text-xl text-gray-600">
              ভর্তি প্রক্রিয়ার সকল তারিখ এক নজরে
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900">{item.event}</h3>
                  </div>
                  <div className="text-lg font-semibold text-blue-700">{item.date}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ভর্তি ও বেতনের তথ্য
            </h2>
            <p className="text-xl text-gray-600">
              স্বচ্ছ এবং সাশ্রয়ী মূল্যে মানসম্মত শিক্ষা
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">কোর্স</th>
                  <th className="px-6 py-4 text-left">ভর্তি ফি</th>
                  <th className="px-6 py-4 text-left">সেমিস্টার ফি</th>
                  <th className="px-6 py-4 text-left">মোট খরচ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fees.map((fee, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{fee.program}</td>
                    <td className="px-6 py-4 text-gray-700">{fee.admission}</td>
                    <td className="px-6 py-4 text-gray-700">{fee.semester}</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              শিক্ষাবৃত্তি ও আর্থিক সহায়তা
            </h2>
            <p className="text-xl text-gray-600">
              মেধাবী ও আর্থিকভাবে অসচ্ছল শিক্ষার্থীদের জন্য বৃত্তি
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
                <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                <div className="text-2xl font-bold text-green-600 mb-3">{scholarship.amount}</div>
                <p className="text-gray-700">{scholarship.criteria}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/scholarships"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              বিস্তারিত জানুন
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                প্রয়োজনীয় কাগজপত্র
              </h2>
              <p className="text-xl text-gray-600">
                ভর্তির সময় নিচের কাগজপত্র সাথে আনতে হবে
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-lg">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              যোগাযোগ করুন
            </h2>
            <p className="text-xl text-gray-600">
              ভর্তি সংক্রান্ত যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ফোন</h3>
              <a href={`tel:${CONTACT_INFO.admissionsPhoneUri}`} className="text-blue-600 hover:text-blue-700">
                {CONTACT_INFO.admissionsPhoneDisplay}
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ইমেইল</h3>
              <a href="mailto:admissions@aushnaracollege.edu.bd" className="text-blue-600 hover:text-blue-700">
                admissions@aushnaracollege.edu.bd
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ঠিকানা</h3>
              <p className="text-gray-700">
                {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            আপনার ভবিষ্যৎ শুরু করুন আজই
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            মানসম্মত শিক্ষা, দক্ষ শিক্ষক এবং উন্নত সুযোগ-সুবিধা নিয়ে আমরা প্রস্তুত আপনাকে স্বাগত জানাতে।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              <FileText className="w-5 h-5" />
              অনলাইনে আবেদন করুন
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/30 transition-all border border-white/20"
            >
              আরও জানুন
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
